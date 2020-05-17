import React from 'react';
import searchIcon from '../../assets/search-solid.svg';

const SearchInput = ({ keyword, onKeyUp }) => (
  <div className="search-input">
    <img src={searchIcon} className="search-icon" alt="logo" />
    <input 
      type="text" 
      placeholder="Search" 
      value={keyword}
      onChange={onKeyUp}
      onKeyUp={onKeyUp} 
    />
  </div>
);

export default React.memo(SearchInput);
