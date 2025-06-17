import React from 'react';
import './ProductDetails.scss';

const ProductDetails = () => {
    return (
        <div className="product-container">
            <div className="image-section">
                <div className="main-image">
                    <div className="image-placeholder">🖼 Main Product</div>
                    <span className="image-count">1 / 5</span>
                </div>
                <div className="thumbnail-list">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className={`thumbnail ${i === 0 ? "active" : ""}`}></div>
                    ))}
                </div>
            </div>

            <div className="details-section">
                <span className="tag">Best Seller</span>
                <h1 className="product-title">Premium Wireless Earbuds Pro</h1>
                <p className="brand-name">by TechPro</p>
                <p className="rating-stars">⭐ 4.8 <span>(2847 reviews)</span></p>

                <div className="price-block">
                    <span className="current-price">$129.99</span>
                    <span className="original-price">$159.99</span>
                    <span className="discount-tag">-19%</span>
                </div>

                <p className="stock-status">🟢 In Stock (47 available)</p>

                <div className="quantity-block">
                    <label>Quantity:</label>
                    <div className="quantity-control">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                </div>

                <div className="action-buttons">
                    <button className="btn primary">🛒 Add to Cart</button>
                    <button className="btn outline">Buy Now</button>
                </div>

                <div className="extra-buttons">
                    <button className="btn flat">♡ Wishlist</button>
                    <button className="btn flat">🔗 Share</button>
                </div>

                <div className="info-highlights">
                    <div><strong>🚚 Free Delivery</strong><br />On orders above $50</div>
                    <div><strong>🔁 30-Day Returns</strong><br />Easy returns policy</div>
                    <div><strong>🛡 2-Year Warranty</strong><br />By manufacturer</div>
                </div>

                <div className="tab-buttons">
                    <button>Description</button>
                    <button>Features</button>
                    <button className="active">Specifications</button>
                </div>

                <ul className="specifications">
                    <li><strong>Battery Life:</strong> 30 hours with case</li>
                    <li><strong>Charging Time:</strong> 1.5 hours</li>
                    <li><strong>Water Resistance:</strong> IPX7</li>
                    <li><strong>Bluetooth Version:</strong> 5.3</li>
                    <li><strong>Driver Size:</strong> 12mm</li>
                    <li><strong>Weight:</strong> 5.2g per earbud</li>
                </ul>
            </div>
        </div>
    );
};

export default ProductDetails;
