import { combineReducers } from 'redux';
import { items, itemHasErrored, itemIsLoading } from './item';

export default combineReducers({
  items,
  itemHasErrored,
  itemIsLoading
});
