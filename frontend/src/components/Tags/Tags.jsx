import React from 'react';
import Tag from '../Tag/Tag';

const Tags = ({ tags, selectedTag, onChange }) => {
  return (
    <ul id="tags">
      <Tag item={'all'} selected={selectedTag} onChange={onChange} />
      {tags.map(item => <Tag 
        item={item} 
        key={item} 
        selected={selectedTag} 
        onChange={onChange} 
      />)}
    </ul>
  );
};

export default React.memo(Tags);
