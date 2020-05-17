import React from 'react';
import searchIcon from '../../assets/search-solid.svg';

const Header = ({ setIsOpen, isOpen }) => (
  <header>
    <h1>SDKs</h1>
    <a href="#" 
      onClick={(e) => { e.preventDefault(); setIsOpen(!isOpen);}} 
      className="filter-btn"
    >
      <img src={searchIcon} className="search-icon" alt="logo" />
    </a>
  </header>
);

export default React.memo(Header);