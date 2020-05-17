import React from 'react';

const sortable = [
  {key: 'title', value: 'Title'},
  {key: 'tags', value: 'Tags'},
  {key: 'tagsandtitle', value: 'Tags and title'}
];

const Toolbar = ({ sort, onClick }) => (
  <nav id="toolbar">
    Order by: 
    {sortable.map((item) => (
      <a href="#" 
        aria-label={`order-by-${item.value}`}
        key={item.key} 
        className={sort === item.key ? 'active' : ''} 
        onClick={(e) => { e.preventDefault(); onClick(item.key)}}
      >
        {item.value}
      </a>
    ))}
  </nav>
);
export default React.memo(Toolbar);