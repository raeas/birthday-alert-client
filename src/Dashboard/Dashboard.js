import React from 'react';
import DashboardTile from '../DashboardTile/DashboardTile';
import './Dashboard.css'


function Dashboard() {
  return (
    <div className='Dashboard'>
      <h1>Birthday Alert!</h1>
      <p>Dashboard Component</p>
      <DashboardTile />
    </div>
  );
}

export default Dashboard;