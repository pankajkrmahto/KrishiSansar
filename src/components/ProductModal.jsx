import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { PRODUCTS_DATA } from '../data/productsData';

const ProductModal = ({ productKey, onClose }) => {
  const { lang } = useLanguage();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  useEffect(() => {
    if (productKey) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [productKey]);

  if (!productKey) return null;

  const product = PRODUCTS_DATA[productKey];
  if (!product) return null;

  const data = product[lang] || product.en;

  const handleOrder = () => {
    addToCart(productKey, 1);
    showToast(
      lang === 'hi' ? `कार्ट में ${data.title} जोड़ा गया! 🛒` : `Added ${data.title} to your cart! 🛒`,
      'success'
    );
    onClose();
  };

  return (
    <div className="modal-overlay active" onClick={(e) => e.target.classList.contains('modal-overlay') && onClose()}>
      <div className="modal-card product-modal-card">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="product-modal-grid">
          <div className="product-modal-img-wrap">
            <img
              src={`/${data.image}`}
              alt={data.title}
              className="product-modal-img"
            />
            <span className="product-badge" style={{ top: '12px', left: '12px' }}>
              {data.badge}
            </span>
          </div>

          <div className="product-modal-details">
            <h2 className="product-modal-title">
              {data.title}
            </h2>
            <p className="product-modal-subtitle">
              {data.subtitle}
            </p>

            <div className="product-modal-price-row">
              <span className="product-modal-price">
                {data.price}
              </span>
              <span className="product-modal-rating">
                {data.rating}
              </span>
            </div>

            <p className="product-modal-desc">
              {data.description}
            </p>

            <h4 className="product-modal-specs-title">
              {lang === 'hi' ? 'तकनीकी विवरण' : 'Technical Specifications'}
            </h4>
            <ul className="product-modal-specs-list">
              {data.specs &&
                data.specs.map((s, idx) => (
                  <li key={idx} className="product-modal-spec-item">
                    <strong>{s.label}:</strong>
                    <span>{s.val}</span>
                  </li>
                ))}
            </ul>

            <h4 className="product-modal-benefits-title">
              {lang === 'hi' ? 'किसानों के लिए मुख्य लाभ' : 'Key Farmer Benefits'}
            </h4>
            <ul className="product-modal-benefits-list">
              {data.benefits &&
                data.benefits.map((b, idx) => (
                  <li key={idx} className="product-modal-benefit-item">
                    <span className="benefit-check">✔</span>
                    <span>{b}</span>
                  </li>
                ))}
            </ul>

            <div className="product-modal-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleOrder}
                style={{ flexGrow: 1, padding: '12px' }}
              >
                <span>{lang === 'hi' ? 'अभी ऑर्डर करें / कार्ट में जोड़ें' : 'Order Now / Book Delivery'}</span>
                <span>➔</span>
              </button>
              <a
                href={`https://wa.me/919876543210?text=Namaste!%20I%20want%20to%20order%20${encodeURIComponent(data.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ borderColor: '#25d366', color: '#128c7e' }}
              >
                <span>{lang === 'hi' ? 'व्हाट्सएप पर बात करें' : 'Chat on WhatsApp'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
