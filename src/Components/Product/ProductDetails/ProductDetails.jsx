import React, { useState, useEffect } from 'react';
import { Minus, Plus } from 'lucide-react';
import { GrAnalytics } from 'react-icons/gr';
import ReactImageMagnify from 'react-image-magnify';
import FlashDeals from '../FlashProduct/FlashProduct';
import './ProductDetails.scss';

const flashDeals = [
  { title: 'Flash Sale', category: 'Electronics', price: 99.99, oldPrice: 199.99, discount: '50%', time: '2h 30m' },
  { title: 'Flash Sale', category: 'Electronics', price: 99.99, oldPrice: 199.99, discount: '50%', time: '2h 30m' },
  { title: 'Flash Sale', category: 'Electronics', price: 99.99, oldPrice: 199.99, discount: '50%', time: '2h 30m' },
  { title: 'Flash Sale', category: 'Electronics', price: 99.99, oldPrice: 199.99, discount: '50%', time: '2h 30m' },
];

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Sample product data - keep your original data
  const product = {
    id: 1,
    name: 'Premium Wireless Headphones',
    description: 'Experience crystal-clear sound with our premium wireless headphones. Featuring noise cancellation, 30-hour battery life, and comfortable over-ear design.',
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.5,
    reviewCount: 128,
    variants: [
      { id: 1, name: 'Black' },
      { id: 2, name: 'White' },
      { id: 3, name: 'Blue' },
    ],
    images: [
      'https://th.bing.com/th/id/OIP.Lz4P6tlpm0Z2eE6g3YJQgwHaE7?w=298&h=199&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
      'https://media.croma.com/image/upload/v1705634974/Croma%20Assets/Communication/Mobiles/Images/303840_rlonbq.png',
      'https://www.sammobile.com/wp-content/uploads/2023/12/Samsung-Galaxy-S24-Series.jpeg',
      'https://www.sammobile.com/wp-content/uploads/2023/12/Samsung-Galaxy-S24-Series.jpeg',
    ],
    features: [
      'Noise cancellation technology',
      '30-hour battery life',
      'Bluetooth 5.0',
      'Built-in microphone',
      'Foldable design'
    ],
    reviews: [
      {
        id: 1,
        name: 'Alex Johnson',
        rating: 5,
        date: '2023-05-15',
        title: "Best headphones I've ever owned",
        comment: 'The sound quality is amazing and the noise cancellation works perfectly. Very comfortable for long listening sessions.'
      },
      {
        id: 2,
        name: 'Sarah Miller',
        rating: 4,
        date: '2023-04-22',
        title: 'Great sound, comfortable fit',
        comment: 'Love these headphones! The battery life is impressive and they stay comfortable even after hours of use.'
      },
      {
        id: 3,
        name: 'Michael Chen',
        rating: 3,
        date: '2023-03-10',
        title: 'Good but could be better',
        comment: 'Sound quality is good but the ear cushions could be more breathable. Battery life is as advertised.'
      }
    ],
    ratingDistribution: [
      { stars: 5, count: 78, percentage: 61 },
      { stars: 4, count: 32, percentage: 25 },
      { stars: 3, count: 12, percentage: 9 },
      { stars: 2, count: 4, percentage: 3 },
      { stars: 1, count: 2, percentage: 2 }
    ]
  };

  const similarProducts = [
    { id: 2, name: 'Wireless Earbuds Pro', price: 149.99, image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6000/6000400_rd.jpg' },
    { id: 3, name: 'Bluetooth Speaker', price: 89.99, image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6000/6000400_rd.jpg' },
    { id: 4, name: 'Noise Cancelling Headphones', price: 179.99, image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6000/6000400_rd.jpg' },
    { id: 5, name: 'Sport Wireless Earbuds', price: 79.99, image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6000/6000400_rd.jpg' },
  ];

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className='d-flex flex-column'>
      <div className="product-details">
        {/* Product Gallery */}
        <div className="product-gallery">
          <div className="thumbnail-container">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>

          <div className="main-image-container">
            {isMobile ? (
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="main-image"
              />
            ) : (
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: product.name,
                    isFluidWidth: true,
                    src: product.images[selectedImage],
                    sizes: '(max-width: 600px) 100vw, 50vw'
                  },
                  largeImage: {
                    src: product.images[selectedImage],
                    width: 1200,
                    height: 1200
                  },
                  enlargedImageContainerDimensions: {
                    width: '150%',
                    height: '100%'
                  },
                  enlargedImageContainerStyle: {
                    zIndex: 100,
                    border: '1px solid var(--border)',
                    borderRadius: '8px'
                  },
                  lensStyle: {
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    cursor: 'zoom-in'
                  },
                  isHintEnabled: true,
                  shouldUsePositiveSpaceLens: true,
                  enlargedImagePosition: 'beside'
                }}
              />
            )}
          </div>
        </div>

        {/* Product Info - Keep your original structure */}
        <div className="product-info">
          <div className="product-header">
            <h1>{product.name}</h1>
            <p>{product.description}</p>

            <div className="price-container">
              <span className="current-price">${product.price.toFixed(2)}</span>
              <span className="original-price">${product.originalPrice.toFixed(2)}</span>
              <span className="discount-badge">
                {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
              </span>
            </div>
          </div>

          <div className="variant-selector">
            <label>Color:</label>
            <div className="variant-options">
              {product.variants.map((variant, index) => (
                <div
                  key={variant.id}
                  className={`variant-option ${variant.name} ${selectedVariant === index ? 'selected' : ''}`}
                  onClick={() => setSelectedVariant(index)}
                >
                  {selectedVariant === index && (
                    <span className="checkmark">✓</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="quantity-selector">
            <label>Quantity:</label>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <button className="quantity-button" onClick={decreaseQuantity}>
                <Minus className='icon' />
              </button>
              <input
                type="text"
                className="quantity-input"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
              />
              <button className="quantity-button" onClick={increaseQuantity}>
                <Plus className='icon' />
              </button>
            </div>
          </div>

          <div className="product-features">
            <h3>Features:</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="action-buttons">
            <button className="primary-button">Add to Cart</button>
            <button className="secondary-button">Buy Now</button>
          </div>

          <div className="product-meta">
            <div className="meta-item">
              <span>✅</span>
              <span>In Stock</span>
            </div>
            <div className="meta-item">
              <span>🚚</span>
              <span>Free Shipping</span>
            </div>
            <div className="meta-item">
              <span>🔄</span>
              <span>30-Day Returns</span>
            </div>
          </div>
        </div>

        {/* Reviews Section - Keep your original structure */}
        <div className="reviews-section">
          <h2>Customer Reviews</h2>

          <div className="review-summary">
            <div className="average-rating">{product.rating.toFixed(1)}</div>
            <div>
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="star">
                    {i < Math.floor(product.rating) ? '★' : '☆'}
                  </span>
                ))}
              </div>
              <div className="rating-count">{product.reviewCount} reviews</div>
            </div>
          </div>

          <div className="rating-distribution">
            {product.ratingDistribution.map((item) => (
              <div key={item.stars} className="rating-bar">
                <span className="rating-label">{item.stars} star{item.stars !== 1 ? 's' : ''}</span>
                <div className="bar-container">
                  <div
                    className="bar-fill"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <span>{item.percentage}%</span>
              </div>
            ))}
          </div>

          <div className="review-list">
            {product.reviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <span className="reviewer-name">{review.name}</span>
                  <span className="review-date">{review.date}</span>
                </div>
                <div className="review-rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="star">
                      {i < review.rating ? '★' : '☆'}
                    </span>
                  ))}
                </div>
                <h4 className="review-title">{review.title}</h4>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Similar Products - Keep your original structure */}
        <div className="similar-products">
          <h2>Similar Products</h2>
          <div className="similar-products-grid">
            {similarProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-card-image"
                />
                <div className="product-card-body">
                  <h3 className="product-card-title">{product.name}</h3>
                  <div className="product-card-price">${product.price.toFixed(2)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='w-100'>
        <FlashDeals 
          icon={<GrAnalytics />} 
          title1={'You Might Like This'} 
          title2={'Hurry!'} 
          desc={'Best Suggestion on Your Search, Analytic and all'} 
          flashDeals={flashDeals} 
        />
      </div>
    </div>
  );
};

export default ProductDetails;