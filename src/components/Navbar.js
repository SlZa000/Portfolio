// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import { HashLink as Links } from 'react-router-hash-link';
import { Link as ScrollLink } from 'react-scroll';
import logo123 from '../images/logo123.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const history = useHistory();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth >= 960) {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth >= 960) {
      setDropdown(false);
    }
  };

  const toggleMobileDropdown = () => {
    setMobileDropdown(!mobileDropdown);
  };

  useEffect(() => {
    // Zamykanie Dropdown po zmianie routingu
    history.listen(() => {
      setDropdown(false);
      setMobileDropdown(false);
    });

    // Usuwanie podkreślenia odnośnika
    var link = document.querySelector('.navbar-logo');
    if (link) {
      link.style.textDecoration = 'none';
    }
  }, [history]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDesktopClick = () => {
    if (window.innerWidth >= 960) {
      toggleMobileDropdown();
    }
  };

  const handleMobileClick = () => {
    if (window.innerWidth < 960) {
      toggleMobileDropdown();
    }
  };

  return (
    <>
      <nav className='navbar'>
      <Link to='/' className='navbar-logo' onClick={scrollToTop}>
        <div className="logo-container">
          <img src={logo123} alt="logo" />
          <span className="navbar-logo-text">Sławomir Zając</span>
        </div>
      </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className={`nav-links ${click ? 'nav-links-mobile' : ''}`} onClick={() => { closeMobileMenu(); scrollToTop(); }}>
              Start
            </Link>
          </li>
          <li className='nav-item'>
            <Links smooth to="/#aboutme" className={`nav-links ${click ? 'nav-links-mobile' : ''}`} onClick={closeMobileMenu}>
              O mnie
            </Links>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/projects'
              className={`nav-links ${click ? 'drop-nav-links-mobile nav-links-mobile' : ''}`}
              onClick={() => { handleDesktopClick(); closeMobileMenu(); scrollToTop(); }}
            >
              Projekty   
              {window.innerWidth >= 960 && (
                <i className='fas fa-caret-down' onClick={handleMobileClick} />
              )}
            </Link>
            {window.innerWidth < 960 && (
                <i className='fas fa-caret-down' onClick={handleMobileClick} />
              )}
            {window.innerWidth >= 960 && (dropdown || (click && mobileDropdown)) && <Dropdown closeMobileMenu={closeMobileMenu} />}
          </li>
          {window.innerWidth < 960 && (dropdown || (click && mobileDropdown)) && <Dropdown closeMobileMenu={closeMobileMenu} />}
          <li className='nav-item'>
            <ScrollLink
              to='contact'
              spy={true}
              smooth={true}
              duration={500}
              className={`nav-links ${click ? 'nav-links-mobile' : ''}`}
              onClick={closeMobileMenu}
            >
              Kontakt
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
