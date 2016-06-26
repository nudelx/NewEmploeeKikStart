import React, { PropTypes } from 'react';
import LinkButtonConraiter from '../containers/button-container';

const Footer = ({ info, page }) => (
  <div className='page-info'>
    <div className='navbar navbar-default navbar-fixed-bottom'>
      <div className='inner-content'>
        <LinkButtonConraiter icon='left' page={page} />
        <div className='footer-info'>{info}</div>
        <LinkButtonConraiter icon='right' page={page} />
      </div>
    </div>
  </div>
);

Footer.propTypes = {
  info: PropTypes.string,
  page: PropTypes.string
};

export default Footer;
