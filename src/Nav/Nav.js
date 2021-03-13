import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css';


function Nav() {
  return (
      <div className='Nav'>
        <ul className='Nav__menu'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/dashboard'>Dashboard</Link></li>
          <li><Link to='/person-list'>Recipient List</Link></li>
          <li><Link to='/add-person'>Add Recipient</Link></li>
        </ul>
      </div>
  );
}

export default Nav;