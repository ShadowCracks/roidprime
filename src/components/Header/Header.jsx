import React from 'react';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <nav className="navigation">
          <ul>
            <li>Sources</li>
            <li>Steroids</li>
            <li>Community</li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="auth-buttons">
        <button>Sign up</button>
        <button>Login</button>
      </div>
    </header>
  );
};

export default Header;

