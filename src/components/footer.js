import React, { PropTypes } from 'react';

const Footer = ({ info }) => (
  <div className='page-info'>
    <div className='navbar navbar-default navbar-fixed-bottom'>
      <div className='inner-content'>
        <button type='button' className='btn btn-primary'>
          <span className='glyphicon glyphicon-arrow-left' aria-hidden='true'></span>
        </button>
        <div className='footer-info'>{info}</div>
        <button type='button' className='btn btn-primary'>
          <span className='glyphicon glyphicon-arrow-right' aria-hidden='true'></span>
        </button>
      </div>
    </div>
  </div>
);

Footer.propTypes = {
  info: PropTypes.string
};


export default Footer;
