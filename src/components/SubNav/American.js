import React, { useRef, useEffect } from 'react';
import { Link } from 'react-scroll';

function American({ show, closeSubNav }) {
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
        <Link className='Navlink' onClick={closeSubNav} to='All American Sets' smooth={true} duration={500}>
          All American Sets
        </Link>
        <Link className='Navlink' onClick={closeSubNav} to='Polki Sets' smooth={true} duration={500}>
          Polki Sets
        </Link>
        <Link className='Navlink' onClick={closeSubNav} to='Reverse AD Sets' smooth={true} duration={500}>
          Reverse AD Sets
        </Link>
        <Link className='Navlink' onClick={closeSubNav} to='Kundon Sets' smooth={true} duration={500}>
          Kundon Sets
        </Link>
      </nav>
    </div>
  ) : null;
}

export default American;
