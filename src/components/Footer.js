import React from 'react'
import './Footer.css'
import { Link } from 'react-scroll'
function Footer() {
  return (
    <section className='Footer'>
     <div className='NewsContainer'>
      <div className='NewsDetails'>
      <h2>Join Our Newsletter to <br/> Keep Up to Date With Us</h2>
      <p>Get all the latest information, sales and offers</p>
      </div>
      <div className='NewsInput'>
      <input type="text" placeholder="Email address here ..." className="subscribe-input" />
      <button className="subscribe-button">Subscribe</button>
      </div>
     </div>
      <hr/>

      <div className='footerdetails'>
       <div className='footercontact'>
       <h2>GET IN TOUCH WITH US</h2>
       <span></span>
       <p>Phone : +394304095209</p>
       <p>support@company.com</p>
       <div className='Newsicons'>
       <h3>Follow us :</h3>
       <div><img className='facebook'src='./imges/facebook.svg' alt=''/></div>
     <div>  <img src='./imges/twitter.svg' alt=''/></div>
      <div> <img src='./imges/instragram.svg' alt=''/></div>
      <div> <img src='./imges/skype.svg' alt=''/></div>
       </div>
       </div>


       <div className='footerInformation'>
       <h2>INFORMATION</h2>
       <span></span>
       <Link className='info' to='#'>About Us</Link>
       <Link className='info' to='#'>Our Products</Link>
       <Link className='info' to='#'>Terms & Conditions</Link>
       <Link className='info' to='#'>Privacy Policy</Link>
       </div>

       <div className='footerResources'>
       <h2>OUR RESOURCES</h2>
       <span></span>
       <Link className='info' to='#'>Plan & Pricing</Link>
       <Link className='info' to='#'>Client Business</Link>
       <Link className='info' to='#'>Sales & Purchadse</Link>
       <Link className='info' to='#'>Product Quality</Link>
       </div>
      </div>
      <hr/>
       <h2>Designed By WebCraftio</h2>
    </section>
  )
}

export default Footer
