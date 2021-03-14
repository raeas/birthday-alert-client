import React from 'react';
import DashboardTile from '../DashboardTile/DashboardTile';
import './Dashboard.css'


function Dashboard() {
  return (
    <div className='Dashboard'>
      <h2>Birthday Alert!</h2>
      <h3>Upcoming Birthdays</h3>
      <DashboardTile />
    </div>
  );
}

export default Dashboard;