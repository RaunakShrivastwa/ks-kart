import React, { useRef } from 'react';
import './FlashProduct.scss';
import { ChevronLeft, ChevronRight, Star } from 'react-feather';
import { useNavigate } from 'react-router-dom';

const FlashDeals = ({ icon, title1, title2, desc, flashDeals }) => {
  const scrollRef = useRef(null);
  const naviGate = useNavigate();

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleDetails = ()=>{
      naviGate('/product/details/:120')
  }

  return (
    <div className="flash-deals-section container">
      <div className="d-flex ">
        <div className="flash-deals-header flex-grow-1">
          <h2><span className='text-accent-1'>{icon && icon}</span> {title1} <span className='text_primary'>{title2}</span></h2>
          <p>{desc}</p>
        </div>
        <div className="slider-controls">
          <div className='circle' onClick={() => scroll('left')}><ChevronLeft /></div>
          <div className='circle' onClick={() => scroll('right')}><ChevronRight /></div>

        </div>
      </div>
      <div className="flash-deals-wrapper" ref={scrollRef}>
        {flashDeals.map((deal, idx) => (
          <div className="flash-card" key={idx}>
            <div className="card-header">
              {deal?.discount && <span className="discount bg_primary-100 text-light fs-14 white">{deal.discount} OFF</span>}
              {deal?.tag && <div className='icon_con timer bg_primary text-light d-flex align-items-center white'>
                 <span className='t_icon d-flex white'>{icon}</span>
                 <span className='white'>{deal?.tag}</span>

              </div> }
              {deal?.time && <span className="timer">⏱ {deal.time}</span>}
            </div>
            <div className="image-placeholder bg-transparent">
              <img className='w-100 h-100' src="https://bsmedia.business-standard.com/_media/bs/img/article/2023-12/03/full/1701622678-4068.jpg?im=FitAndFill=(826,465)" alt="" />
            </div>
            <div className="info">
              <span className="category text_primary">{deal.category}</span>
              <h3 >{deal.title}</h3>
              {deal?.star && (
                <div className="stars">
                  {
                    (() => {
                      const stars = [];
                      for (let i = 1; i <= 5; i++) {
                        stars.push(
                          <Star size={15} key={i} className={i <= deal.star ? 'text-warning' : 'text-muted'} />
                        );
                      }
                      return stars;
                    })()
                  }
                  <span className="rating-count">({deal.rating})</span>
                </div>
              )}

              <p className="price">
                ${deal.price.toFixed(2)} <span className="old-price">${deal.oldPrice.toFixed(2)}</span>
              </p>
              <button onClick={()=>handleDetails()}  className="grab-button w-100 fs-16">Grab Deal</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashDeals;
