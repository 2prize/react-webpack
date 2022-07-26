import React from 'react';
import logo from '../logo.svg';


const Nav = () => {
    return (
        <div className='Navi'>
        <img src={logo} className="App-logo" alt="logo" />
            <p>
          React 배포하기 test용 app 입니다요~
        </p>
        </div>
        
    );
};

export default Nav;