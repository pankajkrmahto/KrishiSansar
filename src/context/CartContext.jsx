import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS_DATA } from '../data/productsData';

const CartContext = createContext();

const INITIAL_CART = [
  {
    id: 'seeds',
    titleEn: 'Hybrid Wheat Seeds (HD-3086)',
    titleHi: 'हाइब्रिड गेहूं के बीज (HD-3086)',
    price: 299,
    image: '/images/product_seeds.jpg',
    qty: 1
  }
];

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('krishi_cart');
      return saved ? JSON.parse(saved) : INITIAL_CART;
    } catch {
      return INITIAL_CART;
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('krishi_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen(prev => !prev);

  const addToCart = (productKey, qty = 1) => {
    const p = PRODUCTS_DATA[productKey];
    if (!p) return;

    setCartItems(prev => {
      const existing = prev.find(item => item.id === productKey);
      if (existing) {
        return prev.map(item =>
          item.id === productKey ? { ...item, qty: item.qty + qty } : item
        );
      } else {
        return [
          ...prev,
          {
            id: productKey,
            titleEn: p.en.title,
            titleHi: p.hi.title,
            price: p.priceNum,
            image: `/${p.en.image}`,
            qty: qty
          }
        ];
      }
    });

    openCart();
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQty = (id, delta) => {
    setCartItems(prev =>
      prev
        .map(item => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const FREE_THRESHOLD = 499;
  const isFreeDelivery = subtotal >= FREE_THRESHOLD || subtotal === 0;
  const deliveryFee = subtotal > 0 && subtotal < FREE_THRESHOLD ? 40 : 0;
  const finalTotal = subtotal + deliveryFee;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        totalItems,
        subtotal,
        FREE_THRESHOLD,
        isFreeDelivery,
        deliveryFee,
        finalTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

