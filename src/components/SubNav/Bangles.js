import React, { useRef, useEffect } from 'react';
import { Link } from 'react-scroll';

function Bangles({ show, closeSubNav }) {
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
        <Link className='Navlink' onClick={closeSubNav} to='Stone Bangles' smooth={true} duration={500}>
        Stone Bangles
        </Link>
        <Link className='Navlink' onClick={closeSubNav} to='Polki Bangles' smooth={true} duration={500}>
        Polki Bangles
        </Link>
        <Link className='Navlink' onClick={closeSubNav} to='Gold Polish' smooth={true} duration={500}>
        Gold Polish
        </Link>
        <Link className='Navlink' onClick={closeSubNav} to='Choora Sets' smooth={true} duration={500}>
        Choora Sets
        </Link>
        <Link className='Navlink' onClick={closeSubNav} to='Mehndi Bangles' smooth={true} duration={500}>
        Mehndi Bangles
        </Link>
        <Link className='Navlink' onClick={closeSubNav} to='Plain Bangles' smooth={true} duration={500}>
        Plain Bangles
        </Link>
      </nav>
    </div>
  ) : null;
}

export default Bangles;
