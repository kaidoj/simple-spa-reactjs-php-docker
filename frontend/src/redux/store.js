import { 
  configureStore, 
  combineReducers, 
  getDefaultMiddleware
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import tagsReducer from '../components/Tags/slices/tags';
import itemsReducer from '../components/Items/slices/items';

const rootReducer = combineReducers({
  tags: tagsReducer,
  items: itemsReducer,
}, getDefaultMiddleware(thunk));

const store = configureStore({
  reducer: rootReducer,
});
export default store;
