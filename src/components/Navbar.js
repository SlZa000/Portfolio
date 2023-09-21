import React, { useState } from 'react';
import { Button } from './Button';
import { Link, useHistory } from 'react-router-dom'; // Dodaj useHistory
import './Navbar.css';
import Dropdown from './Dropdown';
import { HashLink as Links } from 'react-router-hash-link';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const history = useHistory(); // Inicjalizuj useHistory

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  // Funkcja do przewijania strony do góry
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={scrollToTop}> {/* Dodaj onClick do przewijania do góry */}
          Sławomir Zając
          <i className='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={() => { closeMobileMenu(); scrollToTop(); }}> {/* Dodaj onClick do przewijania do góry */}
              Start
            </Link>
          </li>
          <li className='nav-item'>
            <Links smooth to="/#aboutme" className='nav-links' onClick={closeMobileMenu}>
              O mnie
            </Links>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/Projects'
              className='nav-links'
              onClick={() => { closeMobileMenu(); scrollToTop(); }} 
            >
              Projects <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <ScrollLink
              to='contact'
              spy={true}
              smooth={true}
              duration={500}
              className='nav-links'
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
