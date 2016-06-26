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
      <button
        type='button'
        className='btn btn-primary'
        data-page={props.page}
        onClick={getNextPage}
      >
        <span className={className} aria-hidden='true'></span>
      </button>
    </div>
  );
};

LinkButton.propTypes = {
  icon: PropTypes.string.isRequired,
  page: PropTypes.number,
  loadPageByNum: PropTypes.func
};
export default LinkButton;
