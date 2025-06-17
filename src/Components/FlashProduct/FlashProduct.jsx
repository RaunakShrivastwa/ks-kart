import React, { useRef } from 'react';
import './FlashProduct.scss';
import { ChevronLeft, ChevronRight } from 'react-feather';

const flashDeals = [
  { title: 'Flash Sale', category: 'Electronics', price: 99.99, oldPrice: 199.99, discount: '50%', time: '2h 30m' },
  { title: 'Flash Sale', category: 'Electronics', price: 99.99, oldPrice: 199.99, discount: '50%', time: '2h 30m' },
  { title: 'Flash Sale', category: 'Electronics', price: 99.99, oldPrice: 199.99, discount: '50%', time: '2h 30m' },
  { title: 'Flash Sale', category: 'Electronics', price: 99.99, oldPrice: 199.99, discount: '50%', time: '2h 30m' },
  
  // Add more if needed
];

const FlashDeals = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="flash-deals-section container">
       <div className="d-flex ">
        <div className="flash-deals-header flex-grow-1">
        <h2>⚡ Flash <span className='text_primary'>Deals</span></h2>
        <p>Limited time offers - Grab them before they're gone!</p>
      </div>
      <div className="slider-controls">
        <div className='circle'  onClick={() => scroll('left')}><ChevronLeft /></div>
        <div className='circle' onClick={() => scroll('right')}><ChevronRight /></div>
       
      </div>
       </div>
      <div className="flash-deals-wrapper" ref={scrollRef}>
        {flashDeals.map((deal, idx) => (
          <div className="flash-card shadow" key={idx}>
            <div className="card-header">
              <span className="discount bg_primary-100 text-light fs-14">{deal.discount} OFF</span>
              <span className="timer">⏱ {deal.time}</span>
            </div>
            <div className="image-placeholder bg-transparent">
                <img className='w-100 h-100' src="https://bsmedia.business-standard.com/_media/bs/img/article/2023-12/03/full/1701622678-4068.jpg?im=FitAndFill=(826,465)" alt="" />
            </div>
            <div className="info">
              <span className="category text_primary">{deal.category}</span>
              <h3 className='text-dark'>{deal.title}</h3>
              <p className="price text-dark">
                ${deal.price.toFixed(2)} <span className="old-price">${deal.oldPrice.toFixed(2)}</span>
              </p>
              <button className="grab-button primary fs-16">Grab Deal</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashDeals;
