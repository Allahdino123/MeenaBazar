import React, { useRef, useEffect } from 'react';
import { Link } from 'react-scroll';

function Earnings({ show, closeSubNav }) {
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
        <Link className='Navlink' onClick={closeSubNav} to='All Earrings' smooth={true} duration={500}>
        All Earrings
        </Link>
        <Link className='Navlink' onClick={closeSubNav} to='Drop Earrings' smooth={true} duration={500}>
        Drop Earrings
        </Link>
        <Link className='Navlink' onClick={closeSubNav} to='Studs' smooth={true} duration={500}>
        Studs
        </Link>
        <Link className='Navlink' onClick={closeSubNav} to='Jhumkay' smooth={true} duration={500}>
        Jhumkay
        </Link>
        <Link className='Navlink' onClick={closeSubNav} to='Hoops' smooth={true} duration={500}>
        Hoops
        </Link>
        <Link className='Navlink' onClick={closeSubNav} to='Earrings Tikka Sets' smooth={true} duration={500}>
        Earrings Tikka Sets
        </Link>
      </nav>
    </div>
  ) : null;
}

export default Earnings;
