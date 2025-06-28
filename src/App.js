import React, { use } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import "./style.scss";
import Footer from "./common/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from "react-redux";
import CryptoService from "./EncryptionDecryption/CryptoService";
import ProductDetails from "./Components/Product/ProductDetails/ProductDetails";


const App = () => {
  const selector = useSelector((state) => state.theme.mode);
  const theme = localStorage.getItem('theme') ? CryptoService.decrypt(localStorage.getItem('theme')) :   selector || 'light';
  return (
    <div className={`${theme}`}>
      <Router >
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/details/:id"  element={<ProductDetails />} />
        </Routes>
        <Footer />
      </main>
    </Router>
    </div>
  );
};

export default App;
