import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { TAGS_URL } from '../../../api';

const initialState = {
  tags: [],
  fetching: false,
  error: null,
  selectedTag: 'all'
}

const tagsSlice = createSlice({
  name: 'tags',
  initialState: initialState,
  reducers: {
    fetchingTags(state, action) {
      state.fetching = true;
      state.error = null;
    },
    tagsReceived(state, action) {
      state.fetching = false;
      state.tags = action.payload;
    },
    fetchingTagsFailed(state, action) {
      state.error = action.payload;
    },
    tagSelected(state, action) {
      state.selectedTag = action.payload;
    }
  }
});

export const {
  fetchingTags,
  tagsReceived,
  fetchingTagsFailed,
  tagSelected
} = tagsSlice.actions;


export const fetchTags = () => async dispatch => {
  dispatch(fetchingTags());
  try {
    const resp = await axios.get(TAGS_URL);
    dispatch(tagsReceived(resp.data));
  } catch (err) {
    console.log(err);
    dispatch(fetchingTagsFailed(err));
  }
};

export const setSelectedTag = (tag) => dispatch => dispatch(tagSelected(tag));

export default tagsSlice.reducer;
