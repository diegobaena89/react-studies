import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <div className="header">
      <Link to="/">Filmaria</Link>
    </div>
  );
}

export default Header;
