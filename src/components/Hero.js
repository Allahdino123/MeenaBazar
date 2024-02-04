import React from 'react'
import './hero.css'
function Hero() {
  return (
    <section className='HeroSection'>
    <div className='Hero--banner'>
    <img src='./imges/HeroBanner.png' alt='' />
    </div>
    <div className='Hero--detialis'>
    <h2>Happiness comes <br/> in the boxof Jewellery</h2>
    <p>Our full range of Asian ,Indian and Pakistani Bridal Jewellery</p>
    <button className="view-products-btn">View All</button>
    </div>
    </section>
  )
}

export default Hero
