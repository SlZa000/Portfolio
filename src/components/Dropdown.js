import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './/css/Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown({ closeMobileMenu }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link
              className="dropdown-link"
              to={item.path}
              onClick={() => {
                setClick(false);
                closeMobileMenu();
                scrollToTop();
              }}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Dropdown;
