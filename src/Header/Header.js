import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav'


function Header() {
  return (
    <header className='Header'>
      <h1>Birthday Alert!</h1>
      <nav>
        <Nav />
      </nav>
    </header>
  );
}

export default Header;
