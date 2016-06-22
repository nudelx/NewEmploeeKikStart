import React, { PropTypes } from 'react';
import Title from './title';
const App = ({ params }) => (
  <div>
    <Title title='This is a Title' />
    <div>{`React simple starter # page ${params.page}`}</div>
  </div>);
App.propTypes = {
  params: PropTypes.object,
};
export default App;
