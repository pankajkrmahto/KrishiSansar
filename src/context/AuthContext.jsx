import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const DEMO_USER = {
  id: 'usr_101',
  name: 'Ramesh Patel',
  phone: '+91 98765 43210',
  email: 'ramesh.kisan@krishisansar.in',
  role: 'Farmer / किसान',
  state: 'Jharkhand',
  district: 'Ranchi',
  landSize: '4.5 Acres',
  memberSince: '2024'
};

const INITIAL_ORDERS = [
  {
    id: 'KS-849201',
    date: '28 Oct 2026',
    items: [
      { name: 'Hybrid Wheat Seeds (HD-3086)', qty: 2, price: 299 }
    ],
    total: 598,
    status: 'Delivered',
    paymentMode: 'Cash on Delivery (COD)'
  }
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('krishi_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('krishi_orders');
      return saved ? JSON.parse(saved) : INITIAL_ORDERS;
    } catch {
      return INITIAL_ORDERS;
    }
  });

  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signin'); // 'signin' | 'signup' | 'otp' | 'forgot' | 'orders'
  const [generatedOtp, setGeneratedOtp] = useState(null);

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem('krishi_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('krishi_user');
      }
    } catch (e) {
      console.error('Failed to sync user storage', e);
    }
  }, [user]);

  useEffect(() => {
    try {
      localStorage.setItem('krishi_orders', JSON.stringify(orders));
    } catch (e) {
      console.error('Failed to sync orders storage', e);
    }
  }, [orders]);

  const openAuth = (mode = 'signin') => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  const closeAuth = () => {
    setIsAuthOpen(false);
  };

  const signIn = ({ identifier, password }) => {
    // Simulated credential check
    const newUser = {
      id: 'usr_' + Math.floor(1000 + Math.random() * 9000),
      name: identifier.includes('@') ? identifier.split('@')[0] : 'Kisan ' + identifier.slice(-4),
      phone: identifier.includes('@') ? '+91 98765 00000' : identifier,
      email: identifier.includes('@') ? identifier : `${identifier.replace(/\D/g, '')}@kisanmail.in`,
      role: 'Farmer / किसान',
      state: 'Jharkhand',
      district: 'Ranchi',
      memberSince: '2026'
    };
    setUser(newUser);
    closeAuth();
    return newUser;
  };

  const loginDemoUser = (roleType = 'farmer') => {
    const demo = roleType === 'retailer' ? {
      id: 'usr_202',
      name: 'Sunita Sharma',
      phone: '+91 91234 56789',
      email: 'sunita.agri@krishisansar.in',
      role: 'Agri Retailer / कृषि विक्रेता',
      state: 'Jharkhand',
      district: 'Hazaribagh',
      memberSince: '2025'
    } : DEMO_USER;

    setUser(demo);
    closeAuth();
    return demo;
  };

  const signUp = ({ name, phone, email, role, state, district }) => {
    const newUser = {
      id: 'usr_' + Math.floor(1000 + Math.random() * 9000),
      name,
      phone: phone.startsWith('+91') ? phone : `+91 ${phone}`,
      email: email || `${phone.replace(/\D/g, '')}@kisanmail.in`,
      role: role || 'Farmer / किसान',
      state: state || 'Jharkhand',
      district: district || 'Ranchi',
      memberSince: '2026'
    };
    setUser(newUser);
    closeAuth();
    return newUser;
  };

  const sendOtp = (phone) => {
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(code);
    return code;
  };

  const verifyOtp = (phone, otp) => {
    if (!generatedOtp || otp === generatedOtp || otp === '1234') {
      const newUser = {
        id: 'usr_' + Math.floor(1000 + Math.random() * 9000),
        name: 'Kisan ' + phone.slice(-4),
        phone: phone.startsWith('+91') ? phone : `+91 ${phone}`,
        email: `kisan${phone.slice(-4)}@krishisansar.in`,
        role: 'Farmer / किसान',
        state: 'Jharkhand',
        district: 'Ranchi',
        memberSince: '2026'
      };
      setUser(newUser);
      closeAuth();
      return { success: true, user: newUser };
    }
    return { success: false, error: 'Invalid OTP code. Please enter the 4-digit code shown or 1234.' };
  };

  const signOut = () => {
    setUser(null);
  };

  const addOrder = (newOrder) => {
    setOrders(prev => [newOrder, ...prev]);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        orders,
        isAuthOpen,
        authMode,
        setAuthMode,
        openAuth,
        closeAuth,
        signIn,
        signUp,
        sendOtp,
        verifyOtp,
        loginDemoUser,
        signOut,
        addOrder
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

