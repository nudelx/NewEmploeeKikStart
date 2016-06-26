import React, { PropTypes } from 'react';

const onClickAction = (e) => {
  const pageNum = (e.target.nodeName.toUpperCase() === 'SPAN')
                  ? (e.target.parentNode.getAttribute('data-page'))
                  : (e.target.getAttribute('data-page'));
  console.log('CLICK => ', pageNum);
};

const LinkButton = (props) => {
  const className = `glyphicon glyphicon-arrow-${props.icon}`;
  return (
    <div>
      <button
        type='button'
        className='btn btn-primary'
        data-page={props.page}
        onClick={onClickAction}
      >
        <span className={className} aria-hidden='true'></span>
      </button>
    </div>
  );
};

LinkButton.propTypes = {
  icon: PropTypes.string.isRequired,
  // link: PropTypes.string.isRequired
  page: PropTypes.number
};
export default LinkButton;
