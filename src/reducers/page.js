import { handleActions } from 'redux-actions';

const action = 'test';
const defaultState = {
  test: [],
};


export default handleActions({
  [action]: (a) => a
}, defaultState);
