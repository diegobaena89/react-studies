import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
  return (
    <header className="main-header">
      <div className="header-content">
        <Link to="/">Blog</Link>
        <Link to="/login">Entrar</Link>
      </div>
    </header>
  );
}

export default Header;
