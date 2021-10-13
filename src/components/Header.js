import React from 'react';
import './Header.scss';
import atomic from '../assets/atomic.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav className="navMenu">
        <img src={atomic} className="logo" alt="logo" />
        <Link to="/Users">Users</Link>
      </nav>
    </div>
  );
}

export default Header;
