import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Checkout from "./pages/Checkout"; // Updated import path
import Navbar from './components/navbar';
import Footer from './components/Footer.js';
import Feedback from './pages/Feedback';
import { CartProvider, useCart } from './CartContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import ContactUs from './components/contactus.js';
import './App.css';

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// CartProtectedRoute component
const CartProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const { cartItems } = useCart();

  if (!isAuthenticated) return <Navigate to="/login" />;
  if (cartItems.length === 0) return <Navigate to="/menu" />;
  return children;
};

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="app-container">
            <Navbar />
            <main className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                
              
                <Route path="/feedback" element={<Feedback />} />
                
                {/* Removed ProtectedRoute from /menu so it can be accessed without login */}
                <Route path="/menu" element={<Menu />} />
                <Route path="/menu/:itemId" element={<Menu />} />
                <Route path="/contact" element={<ContactUs />} />

                
                <Route 
                  path="/checkout" 
                  element={
                    <CartProtectedRoute>
                      <Checkout />
                    </CartProtectedRoute>
                  } 
                />
                
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
            
            
          </div>
          {/*common footer for all pages*/ }
           <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
