import React, { PropTypes } from 'react';
const brand = '/img/brand.png';

const Title = ({ title }) => (
  <div>
    <nav className='navbar navbar-default navbar-fixed-top'>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <a className='navbar-brand' href='/'>
            <img width='200px' alt='samanage' height='30px' src={brand} />
            <div>{`${title}- test`}</div>
          </a>
        </div>
      </div>
    </nav>
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired
};
export default Title;
