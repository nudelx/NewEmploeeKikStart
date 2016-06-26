import React, { PropTypes } from 'react';

const LinkButton = ({ icon, loadPageByNum, page }) => {
  const getNextPage = (e) => {
    const pageNum = (e.target.nodeName.toUpperCase() === 'SPAN')
      ? (e.target.parentNode.getAttribute('data-page'))
      : (e.target.getAttribute('data-page'));
    loadPageByNum(pageNum);
  };
  const className = `glyphicon glyphicon-arrow-${icon}`;
  const nextPage = (icon.toUpperCase() === 'LEFT') ? (parseInt(page, 0) - 1) : (parseInt(page, 0) + 1) || 1;
  return (
    <div>
      <a
        href={`/${nextPage}`}
        data-page={nextPage}
        className='btn btn-primary fix-width-button'
        onClick={getNextPage}
        role='button'
      >
        <span className={className} aria-hidden='true'></span>
      </a>
    </div>
  );
};

LinkButton.propTypes = {
  icon: PropTypes.string.isRequired,
  page: PropTypes.string,
  loadPageByNum: PropTypes.func,

};
export default LinkButton;
