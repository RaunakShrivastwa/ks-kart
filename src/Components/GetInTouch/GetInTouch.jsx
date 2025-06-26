import './GetInTouch.scss';
import React from 'react';
import { FiSend } from 'react-icons/fi';

const SubscribeSection = () => {
  return (
    <div className="subscribe-section d-flex flex-column align-items-center justify-content-center text-center px-3">
      <h2 className="fw-bold text-white mb-3">Stay in the Loop</h2>
      <p className="text-white mb-4 fs-5">
        Get the latest deals, new arrivals, and exclusive offers delivered straight to your inbox
      </p>
      <div className="d-flex justify-content-center w-100 flex-column flex-md-row gap-3 mb-3">
        <input
        className='input'
          type="email"
          placeholder="Enter your email address"
        />
        <button className="white">
          <FiSend /> Subscribe
        </button>
      </div>
      <div className="d-flex gap-4 text-white small flex-wrap justify-content-center">
        <div className="dot-text"><span className="dot" /> Weekly deals</div>
        <div className="dot-text"><span className="dot" /> New arrivals</div>
        <div className="dot-text"><span className="dot" /> Exclusive offers</div>
      </div>
    </div>
  );
};

export default SubscribeSection;
