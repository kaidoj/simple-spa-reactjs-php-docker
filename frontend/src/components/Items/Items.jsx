import React, { useEffect } from 'react';
import { fetchItems, setPage } from './slices/items';
import Item from '../Item/Item';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';

const Items = () => {
  const dispatch = useDispatch();
  const { items, keyword, sort, loadMore } = useSelector(state => state.items);
  const { selectedTag } = useSelector(state => state.tags);

  const fetchData = () => {
    dispatch(fetchItems());
  };

  useEffect(() => {
    dispatch(setPage(0));
    dispatch(fetchItems());
  }, [selectedTag, keyword, sort]);

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchData}
      hasMore={loadMore}
      loader={<h4>Loading...</h4>}
      scrollableTarget="rightbar"
    >
      <ul id="items">
        {items.map(item => <Item item={item} key={item.id} />)}
      </ul>
    </InfiniteScroll>
  );
};

export default React.memo(Items);