import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import PopularRoutes from './components/PopularRoutes';
import AppDownload from './components/AppDownload';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <PopularRoutes />
      <AppDownload />
      <Footer />
    </div>
  );
}

export default App;