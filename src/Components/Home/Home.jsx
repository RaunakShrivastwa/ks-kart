import React from "react";
import "./Home.scss";
import Banner from "../Banner/Banner";
import Navbar from '../../Components/UI/NavbarUI';
import CatogeryProducts from "../Product/CatogeryProducts/CatogeryProducts";
import FlashDeals from "../Product/FlashProduct/FlashProduct";
import { TrendingDown, TrendingUp, Zap } from "react-feather";
import SubscribeSection from "../GetInTouch/GetInTouch";



const Home = () => {

  const flashDeals = [
    { title: 'Flash Sale', category: 'Electronics', price: 99.99, oldPrice: 199.99, discount: '50%', time: '2h 30m' },
    { title: 'Flash Sale', category: 'Electronics', price: 99.99, oldPrice: 199.99, discount: '50%', time: '2h 30m' },
    { title: 'Flash Sale', category: 'Electronics', price: 99.99, oldPrice: 199.99, discount: '50%', time: '2h 30m' },
    { title: 'Flash Sale', category: 'Electronics', price: 99.99, oldPrice: 199.99, discount: '50%', time: '2h 30m' },
    // Add more if needed
  ];

  const trending = [
    { title: 'Flash Sale', category: 'Electronics', price: 99.99, oldPrice: 199.99, star: 5, rating: '4.8(345)', tag: 'trending' },
    { title: 'Flash Sale', category: 'Electronics', price: 99.99, oldPrice: 199.99, star: 5, rating: '4.8(345)', tag: 'trending' },
    { title: 'Flash Sale', category: 'Electronics', price: 99.99, oldPrice: 199.99, star: 5, rating: '4.8(345)', tag: 'trending' },
    { title: 'Flash Sale', category: 'Electronics', price: 99.99, oldPrice: 199.99, star: 3, rating: '4.8(345)', tag: 'trending' },
    // Add more if needed
  ];

  const Featured = [
    { title: 'Flash Sale', category: 'Electronics', price: 99.99, oldPrice: 199.99, star: 5, rating: '4.8(345)', tag: 'Featured ' },
    { title: 'Flash Sale', category: 'Electronics', price: 99.99, oldPrice: 199.99, star: 3, rating: '4.8(345)', tag: 'Featured ' },
    { title: 'Flash Sale', category: 'Electronics', price: 99.99, oldPrice: 199.99, star: 5, rating: '4.8(345)', tag: 'Featured ' },
    { title: 'Flash Sale', category: 'Electronics', price: 99.99, oldPrice: 199.99, star: 3, rating: '4.8(345)', tag: 'Featured ' },
    // Add more if needed
  ];


  return (
    <div className="home_container">
      <Navbar />
      <Banner />
      <FlashDeals icon={<Zap />} title1={'Flash'} title2={'Deals'} desc={'Limited time offers - Grab them before they'} flashDeals={flashDeals} />
      <CatogeryProducts />
      <FlashDeals icon={<TrendingUp />} title1={'Tranding'} title2={'Now'} desc={'Most Popular Stock'} flashDeals={trending} />
      <FlashDeals title1={'Featured'} title2={'Products'} desc={'Hand-picked products just for you'} flashDeals={Featured} />
      <SubscribeSection />
    </div>
  );
};

export default Home;
