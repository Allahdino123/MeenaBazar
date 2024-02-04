import React from 'react';
import './CardBanner.css'
function CardBanner() {
  const cardData = [
    {
      id: 1,
      image: './imges/banner1.png',
      title: 'Luminious Design',
      description: 'Rings For You',
      buttonText: 'SHOP NOW',
    },
    {
        id: 2,
        image: './imges/banner2.png',
        title: 'Alluring Gold',
        description: 'Earning For You',
        buttonText: 'SHOP NOW',
      },
      {
        id: 3,
        image: './imges/banner3.png',
        title: 'Enchanting Styles Hijab',
        description: 'Hijab For You',
        buttonText: 'SHOP NOW',
      },
  ];

  return (
    <div className='bannerCard'>
      {cardData.map((card) => (
        <div key={card.id} className="card">
          <img src={card.image} alt={card.title} />
          <div className="card-content">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <button>{card.buttonText}</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardBanner;
