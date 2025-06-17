import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Course from './Components/Course/Course'
import "./style.scss";
import Footer from "./common/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from "./Components/Product/ProductDetails/ProductDetails";


const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studio/course"  element={<Course />} />
          <Route path="/studio/productDetails"  element={<ProductDetails />} />
        </Routes>
        {/* <Footer /> */}
      </main>
    </Router>
  );
};

export default App;
