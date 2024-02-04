import React, { useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Bridal.css'
function Bridal({ show, closeSubNav }) {
  const subNavbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (subNavbarRef.current && !subNavbarRef.current.contains(event.target)) {
        closeSubNav();
      }
    };

    if (show) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [show, closeSubNav]);

  return show ? (
    <div ref={subNavbarRef} className="sub-navbar">
      <nav className='navBar'>
        <Link className='Navlink' onClick={closeSubNav} to='heroSection' smooth={true} duration={500}>
          Home
        </Link>
        <Link className='Navlink' onClick={closeSubNav} to='AboutMe' smooth={true} duration={500}>
          Home
        </Link>
        <Link className='Navlink' onClick={closeSubNav} to='MyProjects' smooth={true} duration={500}>
          Home
        </Link>
        <Link className='Navlink' onClick={closeSubNav} to='education' smooth={true} duration={500}>
          Home
        </Link>
         </nav>
        </div>
      ) : null;
}

export default Bridal
