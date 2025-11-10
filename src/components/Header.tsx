import React from 'react';
import '../styles/components.css';

interface HeaderProps {
  name: string;
  tagline: string;
}

const Header: React.FC<HeaderProps> = ({ name, tagline }) => (
  <header className="header">
    <h1 className="header-title">{name}</h1>
    <p className="header-tagline">{tagline}</p>
  </header>
);

export default Header;