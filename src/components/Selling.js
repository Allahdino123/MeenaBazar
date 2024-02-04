import React from 'react';
import './collection.css';
import './selling.css'


function Selling() {
    const selling = [
        { id: 1, imageUrl: './imges/sell1.png', title: 'Gemstone Pendant Chain', buttonText: 'From'  },
        { id: 2, imageUrl: './imges/sell1.png', title: 'Eternal Ruby Stud', buttonText: 'From'  },
        { id: 3, imageUrl: './imges/sell1.png', title: 'Brilliant Stylish Earrings', buttonText:'From ' },
        { id: 4, imageUrl: './imges/sell1.png', title: 'Inspired Round Hooks', buttonText: 'From'  },
      ];
  return (
    <section className='Collection Selling'>
     <img className='img1' src='./imges/sellingbg.png' alt='' />
    
    <h5>STUNNING DESIGN</h5>
    <h2>Our Best Selling</h2>
    <div className='selling'>
    {selling.map(selling => (
        <div key={selling.id} className="selling-item">
          <img src={selling.imageUrl} alt={`Product ${selling.id}`} />
          <h3>{selling.title}</h3>
          <button className='sellbtn'>{selling.buttonText}</button>
        </div>
      ))}
      </div>
       <img className='img2' src='./imges/sellingbg.png' alt='' />
    </section>
  )
}

export default Selling
