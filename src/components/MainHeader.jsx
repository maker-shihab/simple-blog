import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../images/main_header.png';

const MainHeader = () => {
  return (
   <header className='main__header'>
    <div className="container main__header-container">
      <div className="main__hader-left">
        <h4>#100DaysOfWorkOut</h4>
        <h1>Join The Legends Of The Fitness World</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto temporibus dignissimos velit earum beatae magnam.
        </p>
        <Link path='/plan' className='btn lg'>Get Started</Link>
      </div>
      <div className="main__hader-right">
        <div className="main__hader-circle"></div>
        <div className="main__header-image">
          <img src={Image} alt="main-header-img" />
        </div>
      </div>
    </div>
   </header>
  );
};

export default MainHeader;