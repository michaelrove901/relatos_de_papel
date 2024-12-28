import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';
import CheckoutPage from './pages/CheckoutPage';
import ConfirmationPage from './pages/ConfirmationPage';  // Importamos la página de confirmación
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        
        <Route path="/book/:id" element={
          <div>
            <BookPage />
            <Cart />
          </div>
        } />

        <Route path="/checkout" element={
          <div>
            <CheckoutPage />
            <Cart />
          </div>
        } />

        {/* Nueva Ruta para la Confirmación */}
        <Route path="/confirmation" element={<ConfirmationPage />} />
        
      </Routes>
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
