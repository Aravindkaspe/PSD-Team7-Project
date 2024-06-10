import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './Contexts/AuthContext';
import Home from './Pages/Home';
import ShopPage from './Pages/ShopPage';
import ContactPage from './Pages/ContactPage';
import ThreeDPrintingPage from './Pages/3DPrintingPage';
import MaterialsPage from './Pages/MaterialsPage';
import LoginForm from './Components/LoginPage';
import './App.css';
 
function App() {
    return (
        <AuthProvider>
            <Router>
                <AppRoutes />
            </Router>
        </AuthProvider>
    );
}
 
const AppRoutes = () => {
    const { isAuthenticated } = useContext(AuthContext);
 
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/booking" element={<div>Booking Page</div>} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/shop" element={isAuthenticated ? <ShopPage /> : <Navigate to="/login" />} />
            <Route path="/3d-printing" element={isAuthenticated ? <ThreeDPrintingPage /> : <Navigate to="/login" />} />
            <Route path="/materialsPage" element={isAuthenticated ? <MaterialsPage /> : <Navigate to="/login" />} />
        </Routes>
    );
};
 
export default App;