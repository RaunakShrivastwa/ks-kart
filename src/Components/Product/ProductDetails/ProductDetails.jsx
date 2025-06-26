// ProductDetails.jsx
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Heart, Share2, ShoppingCart, Truck, RotateCcw, Shield, Zap } from 'lucide-react';
import './ProductDetails.scss';
import FlashDeals from '../FlashProduct/FlashProduct';

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);

   const flashDeals = [
    { title: 'Flash Sale', category: 'Electronics', price: 99.99, oldPrice: 199.99, discount: '50%', time: '2h 30m' },
    { title: 'Flash Sale', category: 'Electronics', price: 99.99, oldPrice: 199.99, discount: '50%', time: '2h 30m' },
    { title: 'Flash Sale', category: 'Electronics', price: 99.99, oldPrice: 199.99, discount: '50%', time: '2h 30m' },
    { title: 'Flash Sale', category: 'Electronics', price: 99.99, oldPrice: 199.99, discount: '50%', time: '2h 30m' },
    // Add more if needed
  ];

  const productImages = [
    'https://bsmedia.business-standard.com/_media/bs/img/article/2023-12/03/full/1701622678-4068.jpg?im=FitAndFill=(826,465)',
    'https://bsmedia.business-standard.com/_media/bs/img/article/2023-12/03/full/1701622678-4068.jpg?im=FitAndFill=(826,465)',
    'https://bsmedia.business-standard.com/_media/bs/img/article/2023-12/03/full/1701622678-4068.jpg?im=FitAndFill=(826,465)',
    'https://bsmedia.business-standard.com/_media/bs/img/article/2023-12/03/full/1701622678-4068.jpg?im=FitAndFill=(826,465)',
    'https://bsmedia.business-standard.com/_media/bs/img/article/2023-12/03/full/1701622678-4068.jpg?im=FitAndFill=(826,465)'
  ];


  const colors = [
    { name: 'Rose Gold', color: 'rose-gold' },
    { name: 'Silver', color: 'silver' },
    { name: 'Black', color: 'black' },
    { name: 'Blue', color: 'blue' },
    { name: 'Gold', color: 'gold' }
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      verified: true,
      review: "Absolutely love these earbuds! The sound quality is incredible and the noise cancellation works perfectly. Battery life is worth as advertised. Highly recommend!",
      helpful: 234,
      date: "2 months ago"
    },
    {
      name: "Mike Chen",
      rating: 5,
      verified: true,
      review: "Great value for money. Good sound quality and comfortable fit. The case is a bit bulky but overall very satisfied with this purchase.",
      helpful: 156,
      date: "1 month ago"
    },
    {
      name: "Emily Davis",
      rating: 4,
      verified: false,
      review: "These are by far my daily earbud choice combined with the sound experience is excellent. The touch controls are very responsive.",
      helpful: 89,
      date: "3 weeks ago"
    },
    {
      name: "David Wilson",
      rating: 4,
      verified: true,
      review: "Overall best buy exceptional! Great sound quality with incredible noise cancellation for the price. Battery life is as advertised though.",
      helpful: 67,
      date: "2 weeks ago"
    },
    {
      name: "Lisa Anderson",
      rating: 5,
      verified: true,
      review: "Excellent purchase! The sound is crystal clear, comfortable to wear for hours, and the charging case is so convenient.",
      helpful: 45,
      date: "1 week ago"
    }
  ];

  const features = [
    { icon: Truck, title: "Free Delivery", subtitle: "On first delivery", description: "Free shipping nationwide" },
    { icon: RotateCcw, title: "7 Days Returns", subtitle: "Get your money back", description: "Return within 7 days" },
    { icon: Shield, title: "Secure Payment", subtitle: "100% secure payment", description: "Your payment is protected" }
  ];

  const similarProducts = [
    { name: "Sport Wireless Earbuds", price: "$89.99", originalPrice: "$119.99", image: "/api/placeholder/200/200" },
    { name: "Noise Cancelling Headphones", price: "$199.99", originalPrice: "$249.99", image: "/api/placeholder/200/200" },
    { name: "True Wireless Pro", price: "$149.99", originalPrice: "$179.99", image: "/api/placeholder/200/200" },
    { name: "Gaming Earbuds", price: "$79.99", originalPrice: "$99.99", image: "/api/placeholder/200/200" }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`star ${i < rating ? 'star--filled' : 'star--empty'}`}
      />
    ));
  };

  const ratingDistribution = {
    5: { count: 2135, percentage: 75 },
    4: { count: 569, percentage: 20 },
    3: { count: 89, percentage: 3 },
    2: { count: 34, percentage: 1 },
    1: { count: 20, percentage: 1 }
  };

  return (
    <div className="product-page">
      {/* Product Section */}
      <div className="product-section">
        <div className="product-grid">
          {/* Image Gallery */}
          <div className="image-gallery">
            <div className="main-image">
              <img
                src={productImages[selectedImage]}
                alt="Premium Wireless Earbuds Pro"
                className="main-image__img"
              />
              <button className="wishlist-btn">
                <Heart className="wishlist-btn__icon" />
              </button>
            </div>
            <div className="thumbnail-gallery">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`thumbnail ${selectedImage === index ? 'thumbnail--active' : ''}`}
                >
                  <img src={img} alt={`View ${index + 1}`} className="thumbnail__img" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <div className="product-header">
              <h1 className="product-title">Premium Wireless Earbuds Pro</h1>
              <div className="rating-section">
                <div className="stars">{renderStars(5)}</div>
                <span className="review-count">(2,847 reviews)</span>
              </div>
              <div className="price-section">
                <span className="current-price">$129.99</span>
                <span className="original-price">$179.99</span>
                <span className="discount-badge">-28%</span>
              </div>
              <div className="stock-status">
                <div className="stock-indicator"></div>
                <span className="stock-text">9 Stock left available</span>
              </div>
            </div>

            {/* Color Selection */}
            <div className="color-selection">
              <h3 className="section-title">Color</h3>
              <div className="color-options">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`color-option color-option--${color.color} ${
                      selectedColor === index ? 'color-option--active' : ''
                    }`}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="quantity-selection">
              <h3 className="section-title">Quantity</h3>
              <div className="quantity-controls">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="quantity-btn"
                >
                  -
                </button>
                <span className="quantity-display">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="quantity-btn"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="action-buttons">
              <button className="btn btn--primary">
                <ShoppingCart className="btn__icon" />
                <span>Add to Cart</span>
              </button>
              <button className="btn btn--secondary">
                Buy now
              </button>
            </div>

            {/* Features */}
            <div className="features-section">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <feature.icon className="feature-item__icon" />
                  <div className="feature-item__content">
                    <h4 className="feature-item__title">{feature.title}</h4>
                    <p className="feature-item__description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Share */}
            <div className="share-section">
              <button className="share-btn">
                <Share2 className="share-btn__icon" />
                <span className="share-btn__text">Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="product-description">
          <div className="description-grid">
            <div className="description-content">
              <p className="description-text">
                Experience premium sound quality with our latest wireless earbuds. Features advanced noise cancellation,
                up to 8 hours of battery life, and crystal-clear audio. Perfect for music, calls, and everyday use.
              </p>
            </div>
            <div className="specifications">
              <h3 className="specifications__title">Specifications</h3>
              <ul className="specifications__list">
                <li>• Bluetooth 5.2 connectivity</li>
                <li>• 8-hour battery life</li>
                <li>• Quick charge technology</li>
                <li>• IPX7 water resistant</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="reviews-section">
        <div className="reviews-header">
          <h2 className="section-title">Customer Reviews</h2>
          <button className="btn btn--outline">
            Write a Review
          </button>
        </div>

        <div className="reviews-summary">
          <div className="overall-rating">
            <div className="overall-rating__score">4.8</div>
            <div className="overall-rating__stars">{renderStars(5)}</div>
            <div className="overall-rating__count">2,847 reviews</div>
          </div>
          <div className="rating-breakdown">
            {[5, 4, 3, 2, 1].map((stars) => (
              <div key={stars} className="rating-bar">
                <span className="rating-bar__stars">{stars}</span>
                <Star className="rating-bar__star-icon" />
                <div className="rating-bar__progress">
                  <div 
                    className="rating-bar__fill" 
                    style={{ width: `${ratingDistribution[stars].percentage}%` }}
                  ></div>
                </div>
                <span className="rating-bar__count">
                  {ratingDistribution[stars].count}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="reviews-list">
          {reviews.map((review, index) => (
            <div key={index} className="review-item">
              <div className="review-header">
                <div className="reviewer-info">
                  <div className="reviewer-name-section">
                    <h4 className="reviewer-name">{review.name}</h4>
                    {review.verified && (
                      <span className="verified-badge">Verified Purchase</span>
                    )}
                  </div>
                  <div className="review-meta">
                    <div className="review-stars">{renderStars(review.rating)}</div>
                    <span className="review-date">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="review-text">{review.review}</p>
              <div className="review-actions">
                <span className="helpful-text">Was this helpful?</span>
                <button className="helpful-btn">Yes ({review.helpful})</button>
                <button className="helpful-btn">No (12)</button>
              </div>
            </div>
          ))}
          
          <div className="load-more">
            <button className="btn btn--outline">
              Load More Reviews
            </button>
          </div>
        </div>
      </div>

            <FlashDeals icon={<Zap />} title1={'Similar Product'} title2={'Deals'}  flashDeals={flashDeals} />

    </div>
  );
};

export default ProductDetails;