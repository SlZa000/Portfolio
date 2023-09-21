import React, { useState } from 'react';
import { Button } from './Button';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import { HashLink as Links } from 'react-router-hash-link';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const history = useHistory();

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={scrollToTop}>
          Sławomir Zając
          <i className='fab fa-firstdraft' />
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
            className={`nav-item ${click ? 'nav-item-mobile' : ''}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div className='nav-links-container'>
              <Link
                to='/Projects'
                className={`nav-links ${click ? 'nav-links-mobile' : ''}`}
                onClick={() => { closeMobileMenu(); scrollToTop(); }}
              >
                Projects <i className='fas fa-caret-down' />
              </Link>
              {dropdown && <Dropdown />}
            </div>
            {click && (
              <div className={`nav-button ${click ? '' : 'nav-button-mobile'}`}>
                <Button
                buttonStyle='btn--outline'
                buttonSize='btn--mobile'
                to='/Projects'
                onClick={closeMobileMenu}
                className='btn--desktop-hidden' // Dodaj tę klasę
              >
                Projects
              </Button>

              </div>
            )}
          </li>
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
