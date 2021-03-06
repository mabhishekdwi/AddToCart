import React from "react";
import Maincontent from "../Maincontent";
import About from "../pages/About";
import Account from "../pages/Account";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Products from "../pages/Products";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Layout = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Maincontent />} />
        <Route path="/About" element={<About />} />

        <Route path="/Account" element={<Account />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default Layout;
