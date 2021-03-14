import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css'


function Home() {
  return (
    <div className='Home'>
      <h1>Welcome to Birthday Alert!</h1>
      <p>Have you ever forgotten a friend's birthday?</p> 
      <p>Have you ever had to come up with gift idea at the last minute?</p>
      <p>Have you ever had the perfect gift idea for a friend when their birtday was still 8 months away only to forget your perfect gift idea when their birthday arose?</p>
      <p>Birthday Alert is a birthday tracker that allows you to create gift lists for your friends' and relatives' birthdays. You can add a birthday to your "Birthday List" and then create a list of gift ideas. It is easy to get started! Simply click "Add Birthday" to add a person to your Birthday List. To see upcoming birtdays on your Birthday List, click Upcoming B-Days to view details and gift lists. </p>
      <button><Link to='/dashboard' className='text-link'>Upcoming B-Days</Link></button>
      <button><Link to='/add-person' className='text-link'>Add Birthday</Link></button>
    </div>
  );
}

export default Home;