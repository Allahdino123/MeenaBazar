// Collection.js

import React from 'react';
import './collection.css';
import './hero.css';

function Collection() {
  const products = [
    { id: 1, imageUrl: './imges/card1.png' },
    { id: 2, imageUrl: './imges/card2.png' },
    { id: 3, imageUrl: './imges/card3.png' },
    { id: 4, imageUrl: './imges/card4.png' },
    { id: 5, imageUrl: './imges/card5.png' },
    { id: 6, imageUrl: './imges/card6.png' },
    { id: 7, imageUrl: './imges/card7.png' },
    { id: 8, imageUrl: './imges/card8.svg' },
    { id: 9, imageUrl: './imges/card9.svg' },
  ];

  return (
    <section className="Collection">
      <h5>ATTRACTIVE JEWELLERY</h5>
      <h2>Gorgeous Collections</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.imageUrl} alt={`Product ${product.id}`} />
            <div className="button-container">
              <button className="view-products-btn collectbtn">View Details</button>
            </div>
          </div>
        ))}
      </div>
      <button className="view-products-btn butncollect">View All</button>
    </section>
  );
}

export default Collection;
