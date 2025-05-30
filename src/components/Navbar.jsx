import './Navbar.css';
import logo from '../images/logo.png'; 
import React, { useState } from 'react';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="TopTech Logo" />
      </div>

   <div className="hamburger" onClick={toggleMobileMenu}>
  {mobileMenuOpen ? (
    <span className="close-icon">&times;</span>
  ) : (
    <>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </>
  )}
</div>


      <ul className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
        {['Home', 'About', 'Service', 'Pages', 'Blog'].map(menu => (
          <li key={menu} onClick={() => toggleMenu(menu)} className="nav-item">
            <div className="nav-link">
              {menu}
              <svg viewBox="0 0 24 24" className="dropdown-icon" xmlns="http://www.w3.org/2000/svg"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
            </div>
            {activeMenu === menu && (
              <ul className="dropdown">
                <li>{menu} 1</li>
                <li>{menu} 2</li>
                <li>{menu} 3</li>
              </ul>
            )}
          </li>
        ))}
        <li className="nav-item">Contact</li>
        <li className="search-icon">
          <svg viewBox="0 0 512 512" className="search-svg" xmlns="http://www.w3.org/2000/svg">
            <path d="M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z"></path>
          </svg>
        </li>
      </ul>

      <button className="quote-button">Get A Quote</button>
    </nav>
  );
};

export default Navbar;
