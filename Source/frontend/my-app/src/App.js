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
import Bookings from './Pages/Bookings';

import styles from "./Styles/App.module.scss";
import clsx from "clsx";

// PAGES
import Detail from "./Pages/Detail";
import Category from "./Pages/Category";

// COMPONENTS
import Header from "./Components/Header";
import BasketSidebar from "./Components/BasketSidebar";
import Footer from "./Components/Footer";
import MobileBottomNav from "./Components/MobileBottomNav";

// HOOKS
import useMobileDetect from "./hooks/useMobileDetect";

// CONTEXT
import BasketContextProvider from "./Contexts/BasketContext";

const App = () => {
  const device = useMobileDetect();

  return (
    <AuthProvider>
      <Router>
        <BasketContextProvider>
          <div className={clsx(device.type === "mobile" && styles.paddingForMobile, styles.container)}>
            {/* <Header /> */}
            <main className={styles.main}>
              <AppRoutes />
            </main>
            {/* <Footer /> */}
          </div>
          <BasketSidebar />
          {device.type === "mobile" && <MobileBottomNav />}
        </BasketContextProvider>
      </Router>
    </AuthProvider>
  );
};

const AppRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/booking" element={<Bookings />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/shop" element={isAuthenticated ? <ShopPage /> : <Navigate to="/login" />} />
      <Route path="/3d-printing" element={<ThreeDPrintingPage />} />
      <Route path="/materialsPage" element={<MaterialsPage />} />
      <Route path="/product/:slug" element={<Detail />} />
      <Route path="/category/:slug" element={<Category />} />
    </Routes>
  );
};

export default App;