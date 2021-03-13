import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css'


function Home() {
  return (
    <div className='Home'>
      <h1>Welcome to Birthday Alert!</h1>
      <p>Home Component</p>
      <button><Link to='/dashboard' className='text-link'>Go to Dashboard</Link></button>
    </div>
  );
}

export default Home;