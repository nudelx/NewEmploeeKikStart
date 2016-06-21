import React, { PropTypes } from 'react';
const App = ({ params }) => (
  <div>
    <div>{`React simple starter # page ${params.page}`}</div>
  </div>);
App.propTypes = {
  params: PropTypes.object,
};
export default App;
