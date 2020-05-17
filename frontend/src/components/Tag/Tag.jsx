import React from 'react';

const Tag = ({item, selected, onChange}) => (
  <li>
    <input 
      id={item} 
      type="radio" 
      name="tag"
      onChange={() => onChange(item)}
      checked={selected === item}
    /> 
    <label htmlFor={item}>{item}</label>
  </li>
);

export default React.memo(Tag);
