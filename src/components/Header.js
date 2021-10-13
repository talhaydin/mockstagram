import React from 'react';
import './Header.scss';
import atomic from '../assets/atomic.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav className="navMenu">
        <div className>
          <Link to="/">
            {' '}
            <img src={atomic} className="logo" alt="logo" />
          </Link>
          <span>Mockstagram</span>
        </div>
        <span className="navButton">
          <Link to="/users">
            <button>Users</button>
          </Link>
        </span>
      </nav>
    </div>
  );
}

export default Header;
