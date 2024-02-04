import React, { useRef, useEffect } from 'react';
import { Link } from 'react-scroll';

function Scarves({ show, closeSubNav }) {
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
        <Link className='Navlink' onClick={closeSubNav} to='Handpiece' smooth={true} duration={500}>
        Handpiece
        </Link>
        <Link className='Navlink' onClick={closeSubNav} to='Rings' smooth={true} duration={500}>
        Rings
        </Link>
        <Link className='Navlink' onClick={closeSubNav} to='Anklets' smooth={true} duration={500}>
        Anklets
        </Link>
        <Link className='Navlink' onClick={closeSubNav} to='Nose Rings' smooth={true} duration={500}>
        Nose Rings
        </Link>
        <Link className='Navlink' onClick={closeSubNav} to='Waist Belts' smooth={true} duration={500}>
        Waist Belts
        </Link>
        <Link className='Navlink' onClick={closeSubNav} to='Hair Accessories' smooth={true} duration={500}>
        Hair Accessories
        </Link>
        <Link className='Navlink' onClick={closeSubNav} to='Waist Belts' smooth={true} duration={500}>
        Clutch Bags
        </Link>
        <Link className='Navlink' onClick={closeSubNav} to='Bindis' smooth={true} duration={500}>
        Bindis
        </Link>
        <Link className='Navlink' onClick={closeSubNav} to='Scarves/Hijab' smooth={true} duration={500}>
        Scarves/Hijab
        </Link>
      </nav>
    </div>
  ) : null;
}

export default Scarves;
