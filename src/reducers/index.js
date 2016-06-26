import { combineReducers } from 'redux';
import page from './page';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  page
});

export default rootReducer;
