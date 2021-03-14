import React from 'react';
import DashboardTile from '../DashboardTile/DashboardTile';
import './Dashboard.css'


function Dashboard() {
  return (
    <div className='Dashboard'>
      <h2>Upcoming Birthdays</h2>
      <DashboardTile />
    </div>
  );
}

export default Dashboard;