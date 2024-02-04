import React from 'react'
import './collection.css';
import './Articles.css'
const imageItems = [
    {
      id: 1,
      url: './imges/sell1.png',
      title: 'Gemstone Pendant Chain',
      description: 'FROM',
    },
    {
        id: 2,
        url: './imges/sell1.png',
        title: 'Eternal Ruby Stud ',
        description: 'FROM',
      },
      {
        id: 3,
        url: './imges/sell1.png',
        title: 'Brilliant Stylish Earrings',
        description: 'FROM',
      },
      {
        id: 4,
        url: './imges/sell1.png',
        title: 'Inspired Round Hooks',
        description: 'FROM',
      },
      {
        id: 5,
        url: './imges/sell1.png',
        title: 'Gemstone Pendant Chain',
        description: 'FROM',
      },
      {
        id: 6,
        url: './imges/sell1.png',
        title: 'Eternal Ruby Stud',
        description: 'FROM',
      },
      {
        id: 7,
        url: './imges/sell1.png',
        title: 'Brilliant Stylish Earrings',
        description: 'FROM',
      },
      {
        id: 8,
        url: './imges/sell1.png',
        title: 'Inspired Round Hooks',
        description: 'FROM',
      },
  ];
function Articles() {
  return (
    <section className='Articles Collection'>
    <h5>News & BLOGS</h5>
    <h2>Jewelery Articles</h2>
    <div className='GroupBtn'>
    <button className='btn '>Bridal Sets</button>
    <button className='btn '>Necklace Sets</button>
    <button className='btn '>Rings</button>
    <button className='btn '>Earnings</button>
    <button className='btn '>Earning Tikka sets</button>
    <button className='btn '>Tikka sets</button>
    <button className='btn '>Jummar</button>
    </div>
    <div className="image-grid-container">
    {imageItems.map((image) => (
      <div key={image.id} className="image-item">
        <img src={image.url} alt={image.title} />
        <div className="overlay">
          <button className="add-to-cart-button">ADD TO CARD</button>
        </div>
        <div className="image-details">
          <h4>{image.title}</h4>
          <p>{image.description}</p>
        </div>
      </div>
    ))}
  </div>
  <button className="view-products-btn collectbtn">View All</button>
    </section>
  )
}

export default Articles
