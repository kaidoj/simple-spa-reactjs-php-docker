import React from 'react';

const Item = ({ item }) => (
  <li className="item">
    {item.title}
    {item.tags ? <span>{item.tags.join(',')}</span> : null }
  </li>
);

export default React.memo(Item);
