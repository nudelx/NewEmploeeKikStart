import React, { PropTypes } from 'react';


const LinkButton = (props) => {
  const getNextPage = (e) => {
    const pageNum = (e.target.nodeName.toUpperCase() === 'SPAN')
      ? (e.target.parentNode.getAttribute('data-page'))
      : (e.target.getAttribute('data-page'));
    props.loadPageByNum(pageNum);
  };

  console.dir(props);
  const className = `glyphicon glyphicon-arrow-${props.icon}`;
  return (
    <div>
      <a
        href={`/${(parseInt(props.page, 0) + 1)}`}
        data-page={props.page}
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
  loadPageByNum: PropTypes.func
};
export default LinkButton;
