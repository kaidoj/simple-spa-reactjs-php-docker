import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import Items from '../Items/Items';
import { useDispatch, useSelector } from 'react-redux';
import { setSort } from '../Items/slices/items';

const Rightbar = () => {
  const dispatch = useDispatch();
  const { sort } = useSelector(state => state.items);
  const onSortClick = (sort) => dispatch(setSort(sort));

  return (
    <section id="rightbar"> 
      <Toolbar sort={sort} onClick={onSortClick} />
      <Items />
    </section>
  );
};

export default React.memo(Rightbar);