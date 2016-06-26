import React, { PropTypes } from 'react';
import LinkButtonConraiter from '../containers/button-container';

const Footer = ({ info }) => (
  <div className='page-info'>
    <div className='navbar navbar-default navbar-fixed-bottom'>
      <div className='inner-content'>
        <LinkButtonConraiter icon='left' />
        <div className='footer-info'>{info}</div>
        <LinkButtonConraiter icon='right' />
      </div>
    </div>
  </div>
);

Footer.propTypes = {
  info: PropTypes.string
};


export default Footer;
