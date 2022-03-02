import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <div className='header-container'>
        <div className='header'>
            <div className='header-logo'>Xpense<i className="fi fi-rr-credit-card"></i></div>
            <div className='header-button'>
                <a href='https://github.com/brunochaves77' target='_blank' rel='noopener noreferrer'>
                    <i className="devicon-github-original"></i>Star
                </a>
            </div>
        </div>
    </div>
  )
}

export default Header;