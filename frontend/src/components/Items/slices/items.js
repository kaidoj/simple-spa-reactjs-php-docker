import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { ITEMS_URL } from '../../../api';
import { calculateLimit } from '../utils/calculateLimit';

const initialState = {
  items: [],
  fetching: false,
  error: null,
  page: 0,
  sort: 'title',
  keyword: '',
  loadMore: true,
  limit: calculateLimit(12),
}

const itemsSlice = createSlice({
  name: 'items',
  initialState: initialState,
  reducers: {
    fetchingItems(state, action) {
      state.fetching = true;
      state.error = null;
    },
    itemsReceived(state, action) {
      state.fetching = false;
      state.items = [...state.items, ...action.payload];
    },
    fetchingItemsFailed(state, action) {
      state.error = action.payload;
    },
    setKeyword(state, action) {
      state.keyword = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    resetItems(state, action) {
      state.items = [];
    },
    setLoadMore(state, action) {
      state.loadMore = action.payload;
    }
  }
});

export const {
  fetchingItems,
  itemsReceived,
  fetchingItemsFailed,
  setKeyword,
  setSort,
  setPage,
  resetItems,
  setLoadMore,
} = itemsSlice.actions;


export const fetchItems = () => async (dispatch, getState) => {
  dispatch(fetchingItems());
  const state = getState();
  const page = state.items.page + 1;
  dispatch(setPage(page));
  
  if (page === 1) {
    dispatch(setLoadMore(true));
    dispatch(resetItems());
  }

  const {
    keyword,
    sort,
    limit
  } = state.items;

  const params = new URLSearchParams({
    tag: state.tags.selectedTag,
    search: keyword,
    page,
    sort,
    limit
  }).toString()

  try {
    const resp = await axios.get(ITEMS_URL + '?' + params);
    if (resp.data.length < limit) {
      dispatch(setLoadMore(false));
    }
    dispatch(itemsReceived(resp.data));
  } catch (err) {
    console.log(err);
    dispatch(fetchingItemsFailed(err));
  }
};

export const search = (keyword) => dispatch => dispatch(setKeyword(keyword));
export const sort = (sort) => dispatch => dispatch(setSort(sort));
export const page = (page) => dispatch => dispatch(setPage(page));

export default itemsSlice.reducer;
