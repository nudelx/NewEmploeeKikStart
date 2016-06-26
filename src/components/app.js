import React, { PropTypes } from 'react';
import Title from './title';
import Footer from './footer';
import Page from './page';
import SETTINGS from '../constants/app-settings';


const App = ({ params }) => (
  <div>
    <Title title={SETTINGS.title} />
    <Page content={`React simple starter # page ${params.page}`} />
    <Footer info='page x of y' />
  </div>);

App.propTypes = {
  params: PropTypes.object,
};
export default App;
