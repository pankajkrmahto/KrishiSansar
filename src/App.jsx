import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';

import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import ExpertAdvisor from './components/ExpertAdvisor';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import ProductModal from './components/ProductModal';
import AdvisorModal from './components/AdvisorModal';
import CartDrawer from './components/CartDrawer';
import AuthModal from './components/AuthModal';
import FloatingActions from './components/FloatingActions';
import ToastContainer from './components/Toast';

const MainLayout = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProductKey, setSelectedProductKey] = useState(null);
  const [isAdvisorModalOpen, setIsAdvisorModalOpen] = useState(false);

  // ScrollSpy to highlight active navbar link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products', 'services', 'advisor', 'about', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="krishi-app-wrapper">
      <Topbar />
      <Navbar activeSection={activeSection} />

      <main>
        <Hero onOpenAdvisor={() => setIsAdvisorModalOpen(true)} />
        <Products onSelectProduct={(key) => setSelectedProductKey(key)} />
        <Services />
        <ExpertAdvisor onOpenAdvisorModal={() => setIsAdvisorModalOpen(true)} />
        <About />
        <Contact />
      </main>

      <Footer />

      {/* Global Interactive Modals & Drawers */}
      <ProductModal
        productKey={selectedProductKey}
        onClose={() => setSelectedProductKey(null)}
      />
      <AdvisorModal
        isOpen={isAdvisorModalOpen}
        onClose={() => setIsAdvisorModalOpen(false)}
      />
      <CartDrawer />
      <AuthModal />
      <FloatingActions />
      <ToastContainer />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <AuthProvider>
          <ToastProvider>
            <MainLayout />
          </ToastProvider>
        </AuthProvider>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;

