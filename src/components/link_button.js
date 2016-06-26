import React, { PropTypes } from 'react';

const LinkButton = ({ icon }) => (
  <div>
    <button type='button' className='btn btn-primary'>
      <span className={`glyphicon glyphicon-arrow-${icon}`} aria-hidden='true'></span>
    </button>
  </div>
);

LinkButton.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};
export default LinkButton;
