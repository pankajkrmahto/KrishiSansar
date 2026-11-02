import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

const CartDrawer = () => {
  const { lang } = useLanguage();
  const {
    cartItems,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQty,
    clearCart,
    totalItems,
    subtotal,
    FREE_THRESHOLD,
    isFreeDelivery,
    deliveryFee,
    finalTotal
  } = useCart();
  const { addOrder } = useAuth();
  const { showToast } = useToast();

  React.useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const pct = Math.min(100, Math.round((subtotal / FREE_THRESHOLD) * 100));

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      showToast(
        lang === 'hi'
          ? 'आपकी कार्ट खाली है। कृपया पहले उत्पाद जोड़ें।'
          : 'Your cart is empty. Please add products first.',
        'info'
      );
      return;
    }

    const orderId = 'KS-' + Math.floor(100000 + Math.random() * 900000);
    const newOrder = {
      id: orderId,
      date: new Date().toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }),
      items: cartItems.map(i => ({
        name: lang === 'hi' ? i.titleHi : i.titleEn,
        qty: i.qty,
        price: i.price
      })),
      total: finalTotal,
      status: 'Confirmed',
      paymentMode: 'Cash on Delivery (COD)'
    };

    addOrder(newOrder);
    clearCart();
    closeCart();

    showToast(
      lang === 'hi'
        ? `🎉 ऑर्डर #${orderId} कन्फर्म हो गया! हमारी टीम कैश ऑन डिलीवरी के लिए जल्द संपर्क करेगी।`
        : `🎉 Order #${orderId} Confirmed! Our team will contact you for cash on delivery (COD).`,
      'success',
      4500
    );
  };

  // WhatsApp order text
  const itemsSummary = cartItems
    .map(i => {
      const name = lang === 'hi' ? (i.titleHi || i.titleEn) : (i.titleEn || i.titleHi);
      return `• ${name} (मात्रा: ${i.qty}) - ₹${i.price * i.qty}`;
    })
    .join('%0A');

  const waMsg =
    lang === 'hi'
      ? `नमस्ते कृषि संसार! मैं एक ऑर्डर देना चाहता हूँ:%0A${itemsSummary}%0A*कुल देय राशि: ₹${finalTotal}*%0Aकृपया मेरे पते पर डिलीवरी की पुष्टि करें।`
      : `Namaste Krishi Sansar! I would like to place an order:%0A${itemsSummary}%0A*Total: ₹${finalTotal}*%0APlease confirm delivery details to my address.`;

  return (
    <div
      className="cart-drawer-overlay active"
      onClick={(e) => e.target.classList.contains('cart-drawer-overlay') && closeCart()}
    >
      <div className="cart-drawer">
        {/* Drawer Header */}
        <div className="cart-drawer-header">
          <div className="cart-drawer-title">
            <span className="cart-title-icon">🛒</span>
            <h3>{lang === 'hi' ? 'कृषि शॉपिंग कार्ट' : 'Agri Shopping Cart'}</h3>
            <span className="cart-items-pill">
              {totalItems} {lang === 'hi' ? 'उत्पाद' : totalItems === 1 ? 'Item' : 'Items'}
            </span>
          </div>
          <button className="cart-close-btn" onClick={closeCart} aria-label="Close Cart Drawer">
            ✕
          </button>
        </div>

        {/* Free Delivery Progress Bar */}
        <div className="cart-delivery-bar">
          <div className="delivery-status-text">
            {subtotal === 0 ? (
              <span>
                🚚{' '}
                {lang === 'hi'
                  ? `₹${FREE_THRESHOLD} से अधिक के ऑर्डर पर मुफ़्त गांव डिलीवरी`
                  : `Free Farmer Delivery over ₹${FREE_THRESHOLD}`}
              </span>
            ) : isFreeDelivery ? (
              <span>
                🎉{' '}
                <strong>
                  {lang === 'hi'
                    ? 'बधाई हो! आपको मिली मुफ़्त गांव डिलीवरी!'
                    : 'Congratulations! You unlocked FREE Village Delivery!'}
                </strong>
              </span>
            ) : (
              <span>
                {lang === 'hi' ? (
                  <>
                    मुफ़्त गांव डिलीवरी के लिए <strong>₹{FREE_THRESHOLD - subtotal}</strong> का और सामान जोड़ें!
                  </>
                ) : (
                  <>
                    Add <strong>₹{FREE_THRESHOLD - subtotal}</strong> more for FREE Village Delivery!
                  </>
                )}
              </span>
            )}
          </div>
          <div className="delivery-progress-track">
            <div className="delivery-progress-fill" style={{ width: `${pct}%` }}></div>
          </div>
        </div>

        {/* Cart Items List */}
        <div className="cart-drawer-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty-state">
              <div className="cart-empty-icon">🌾</div>
              <h4>{lang === 'hi' ? 'आपकी कार्ट खाली है' : 'Your Cart is Empty'}</h4>
              <p>
                {lang === 'hi'
                  ? 'आपने अभी तक कोई कृषि उत्पाद या उपकरण नहीं जोड़ा है। हमारे प्रमाणित कैटलॉग को देखें!'
                  : "You haven't added any agriculture products or tools yet. Explore our verified certified catalog!"}
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  closeCart();
                  const pSec = document.getElementById('products');
                  if (pSec) pSec.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{ padding: '10px 20px' }}
              >
                <span>{lang === 'hi' ? 'उत्पाद कैटलॉग देखें' : 'Browse Products Catalog'}</span>
                <span>➔</span>
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item-card">
                <img
                  src={item.image}
                  alt={lang === 'hi' ? item.titleHi : item.titleEn}
                  className="cart-item-thumb"
                />
                <div className="cart-item-info">
                  <div className="cart-item-top">
                    <h5 className="cart-item-title">
                      {lang === 'hi' ? item.titleHi : item.titleEn}
                    </h5>
                    <button
                      type="button"
                      className="cart-remove-btn"
                      onClick={() => removeFromCart(item.id)}
                      title={lang === 'hi' ? 'हटाएं' : 'Remove item'}
                    >
                      🗑️
                    </button>
                  </div>
                  <div className="cart-item-meta">
                    <span className="cart-item-price">
                      ₹{(item.price * item.qty).toLocaleString('en-IN')}
                    </span>
                    <div className="cart-qty-stepper">
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() => updateQty(item.id, -1)}
                      >
                        -
                      </button>
                      <span className="qty-val">{item.qty}</span>
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() => updateQty(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Summary & Checkout Footer */}
        <div className="cart-drawer-footer">
          <div className="cart-summary-row">
            <span>{lang === 'hi' ? 'सामान का उप-योग:' : 'Items Subtotal:'}</span>
            <span className="summary-val">₹{subtotal.toLocaleString('en-IN')}</span>
          </div>
          <div className="cart-summary-row delivery-row">
            <span>{lang === 'hi' ? 'गांव तक डिलीवरी:' : 'Delivery to Village:'}</span>
            <span
              className="summary-val"
              style={{ color: isFreeDelivery ? '#15803d' : '#ea580c', fontWeight: 700 }}
            >
              {isFreeDelivery ? (lang === 'hi' ? 'मुफ़्त' : 'FREE') : `₹${deliveryFee}`}
            </span>
          </div>
          <div className="cart-summary-total">
            <span>{lang === 'hi' ? 'कुल देय राशि:' : 'Total Amount:'}</span>
            <span className="total-val">₹{finalTotal.toLocaleString('en-IN')}</span>
          </div>

          <div className="cart-actions-group">
            <button
              type="button"
              className="btn btn-primary btn-checkout"
              onClick={handleCheckout}
            >
              <span>{lang === 'hi' ? 'ऑर्डर कन्फर्म करें (COD उपलब्ध)' : 'Confirm Order (COD Available)'}</span>
              <span>➔</span>
            </button>
            <a
              href={`https://wa.me/919876543210?text=${waMsg}`}
              className="btn btn-secondary btn-whatsapp-order"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{lang === 'hi' ? 'व्हाट्सएप से ऑर्डर करें' : 'Order via WhatsApp'}</span>
              <span>💬</span>
            </a>
          </div>
          <p className="cart-guarantee-note">
            🔒 {lang === 'hi' ? '100% प्रमाणित प्रामाणिक कृषि उत्पाद • डिलीवरी पर भुगतान (COD)' : '100% Certified Genuine Agri Inputs • Pay on Delivery (COD)'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;

