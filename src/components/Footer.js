import React from 'react';
import Touch from '../assets/Touch Icon.svg'
const Footer = () => {
    return (
      <nav className='footer'>
        <div className='container-fluid px-5 py-4 d-flex flex-column align-items-center justify-content-center'>
          <a className='navbar-brand'>
            <img src={Touch} />
          </a>
          <h3 className='activation-title mt-3'>
            Touch screen to preview dashboard
          </h3>
        </div>
      </nav>
    );
}

export default Footer;