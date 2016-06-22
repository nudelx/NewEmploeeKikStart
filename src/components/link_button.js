import React, { PropTypes } from 'react';

const LinkButton = ({ icon, link }) => (
  <div>
    <div>{icon}</div>
    <div>{link}</div>
  </div>
);

LinkButton.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};
export default LinkButton;
