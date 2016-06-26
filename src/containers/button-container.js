import { connect } from 'react-redux';
import LinkButton from '../components/link_button';
import pageActions from '../actions/page';

const mapDispatchToProps = (dispatch) => {
  const loadPageAction = pageActions(dispatch);

  const loadPageByNum = (pageNum) => {
    loadPageAction.loadPage(pageNum);
  };
  return {
    loadPageByNum
  };
};

export default connect(null, mapDispatchToProps)(LinkButton);
