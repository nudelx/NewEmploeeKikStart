import { createAction } from 'redux-actions';
const stasesReceivedEvent = createAction('example');

const bla = (dispatch) => {
  const a = 'd';
  return {
    oops: () => {
      dispatch(stasesReceivedEvent(a));
    }
  };
};

export default bla;
