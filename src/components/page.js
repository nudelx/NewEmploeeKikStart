import React, { PropTypes } from 'react';

const Page = ({ content }) => (
  <div className='page'>
    {content}
  </div>
);

Page.propTypes = {
  content: PropTypes.string
};

export default Page;
