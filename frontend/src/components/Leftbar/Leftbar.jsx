import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchInput from '../SearchInput/SearchInput';
import Tags from '../Tags/Tags';
import { search } from '../Items/slices/items';
import { fetchTags, setSelectedTag } from '../Tags/slices/tags';

const Leftbar = ({ isOpen }) => {
  const dispatch = useDispatch();
  const { keyword } = useSelector(state => state.items);
  const { tags, selectedTag } = useSelector(state => state.tags);
  const onInputChange = (e) => dispatch(search(e.target.value));
  const onTagChange = (tag) => dispatch(setSelectedTag(tag));

  useEffect(() => {
    dispatch(fetchTags());
  }, []);
  
  return (
    <aside id="leftbar" className={isOpen ? 'is-open' : null}>
      <SearchInput 
        onKeyUp={onInputChange}
        keyword={keyword}
      />
      <Tags 
        tags={tags}
        selectedTag={selectedTag}
        onChange={onTagChange}
      />
    </aside>
  );
};

export default React.memo(Leftbar);