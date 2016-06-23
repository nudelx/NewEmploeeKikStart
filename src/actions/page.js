import { createAction } from 'redux-actions';
import ACTIONS from 'constants/actionsConstants';
const pageReceived = createAction(ACTIONS.PAGE_RECEIVED);

const pageActions = (dispatch) => (
  {
    loadPage: (num) => {
      window.fetch(`/data/${num}.md`)
            .then((response) => response.text())
            .then((text) => dispatch(pageReceived({ received: true, md: text })));
    }
  }
);

export default pageActions;
