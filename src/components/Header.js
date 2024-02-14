import React from 'react';
import Logo from "../assets/Isolation_Mode.svg";
const Header = () => {
    return (
      <nav className='navbar transparent-nav p-0'>
        <div className='container-fluid align-items-center pt-5 py-4 px-2'>
          <a
            className='navbar-brand'
            // href='url'
          >
             <img src={Logo} /> 
          </a>
          <h3 className='activation-title pt-1 pe-5'>
            IoT - AI DRIVEN PATIENT CRITICALITY PREDICTOR
          </h3>
        </div>
      </nav>
    );
}

export default Header;