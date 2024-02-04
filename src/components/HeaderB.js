import React from 'react'
import './headerb.css'
function HeaderB() {
  return (
   <section className='HeaderB'>
    <div className='logo'>
     <img src='./imges/logo.png' alt='' />
    </div>
     <div className="search-bar-container">
     <input type="text" className="search-input" placeholder="Search for the product" />
     <button className="search-button">Search</button>
   </div>
     <div className='icons'>
     <img src='./imges/user.png' alt=''/>
     <img src='./imges/Group 4.svg' alt=''/>
     </div>
   </section>
  )
}

export default HeaderB
