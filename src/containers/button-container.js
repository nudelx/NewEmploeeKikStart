import { connect } from 'react-redux';
import Button from '../components/link_button';
import pageActions from '../actions/page';

const mapDispatchToProps = (dispatch) => {
  const loadPageAction = pageActions(dispatch);

  const loadPageByNum = (num) => {
    loadPageAction.loadPage(num);
  };
  return { loadPageByNum };
};

export default connect(null, mapDispatchToProps)(Button);
