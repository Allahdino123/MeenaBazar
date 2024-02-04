import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import './navbar.css';
import Bridal from "./SubNav/Bridal";
import Necklace from "./SubNav/Necklace";
import American from "./SubNav/American"; 
import Earnings from "./SubNav/Earnings";
import Bangles from "./SubNav/Bangles";
import Scarves from "./SubNav/Scarves";

function NavBar(props) {
  const [navActive, setNavActive] = useState(false);
  const [showBridalSubNav, setShowBridalSubNav] = useState(false);
  const [showNecklaceSubNav, setShowNecklaceSubNav] = useState(false);
  const [showAmericanSubNav, setShowAmericanSubNav] = useState(false); 
  const [showEarringsSubNav, setShowEarringsSubNav] = useState(false); 
  const [showBanglesSubNav, setShowBanglesSubNav] = useState(false); 
  const [showScarvesSubNav, setShowScarvesSubNav] = useState(false); 
  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
    setShowBridalSubNav(false);
    setShowNecklaceSubNav(false);
    setShowAmericanSubNav(false); 
    setShowEarringsSubNav(false); 
    setShowBanglesSubNav(false); 
    setShowScarvesSubNav(false); 
  };

  const toggleBridalSubNav = () => {
    setShowBridalSubNav(!showBridalSubNav);
  };

  const toggleNecklaceSubNav = () => {
    setShowNecklaceSubNav(!showNecklaceSubNav);
  };

  const toggleAmericanSubNav = () => { 
    setShowAmericanSubNav(!showAmericanSubNav);
  };
  const toggleEarringsSubNav = () => { 
    setShowEarringsSubNav(!showEarringsSubNav);
  };
  const toggleBanglesSubNav = () => { 
    setShowBanglesSubNav(!showBanglesSubNav);
  };
  const toggleScarvesSubNav = () => { 
    setShowScarvesSubNav(!showScarvesSubNav);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </div>

      <div className={`navbar--item ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={() => {
                closeMenu();
                toggleBridalSubNav();
              }}
              activeClass="navbar--active--content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Bridal Sets
            </Link>
            <Bridal show={showBridalSubNav} closeSubNav={closeMenu} />
          </li>

          <li>
            <Link
              onClick={() => {
                closeMenu();
                toggleNecklaceSubNav();
              }}
              activeClass="navbar--active--content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              Necklace Sets
            </Link>
            <Necklace show={showNecklaceSubNav} closeSubNav={closeMenu} />
          </li>

          <li>
            <Link
            onClick={() => {
              closeMenu();
              toggleAmericanSubNav();
            }}
              activeClass="navbar--active--content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyProjects"
              className=" navbar--content"
            >
              American Diamond
            </Link>
            <American show={showAmericanSubNav} closeSubNav={closeMenu}/> 
          </li>

          <li>
            <Link
            onClick={() => {
              closeMenu();
              toggleEarringsSubNav();
            }}
              activeClass="navbar--active--content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="education"
              className=" navbar--content"
            >
              Earnings
            </Link>
          </li>
          <Earnings show={showEarringsSubNav} closeSubNav={closeMenu}/>

          <li>
            <Link
            onClick={() => {
              closeMenu();
              toggleBanglesSubNav();
            }}
              activeClass="navbar--active--content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="education"
              className=" navbar--content"
            >
              Bangles
            </Link>
          </li>
          <Bangles show={showBanglesSubNav} closeSubNav={closeMenu}/>
          <li>
            <Link
            onClick={() => {
              closeMenu();
              toggleScarvesSubNav();
            }}
              activeClass="navbar--active--content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="education"
              className=" navbar--content"
            >
              Scarves/Hijab
            </Link>
          </li>
          <Scarves show={showScarvesSubNav} closeSubNav={closeMenu}/>
        </ul>
      </div>

      <Link
        onClick={closeMenu}
        activeClass="navbar--active--content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="contact"
        className="btn btn-outline-primary"
      >
        More Collection
      </Link>
   
    </nav>
  );
}

export default NavBar;
