import React from 'react';
import './DashboardTile.css'


function DashboardTile() {
  return (
    <>
      <div className='DashboardTile'>
        <span className='DashboardItem'>Birthday</span>
        <span className='DashboardItem'>Name</span>
        <span className='DashboardItem'>Age</span>
        <span className='DashboardItem'>Gift List</span>
      </div>
      <div className='DashboardTile'>
        <span className='DashboardItem'>4/1/21</span>
        <span className='DashboardItem'>Sally Smith</span>
        <span className='DashboardItem'>14</span>
        <span className='DashboardItem'>List Button</span>
      </div>
      <div className='DashboardTile'>
        <span className='DashboardItem'>6/20/21</span>
        <span className='DashboardItem'>John Conway</span>
        <span className='DashboardItem'>54</span>
        <span className='DashboardItem'>List Button</span>
      </div>
      <div className='DashboardTile'>
        <span className='DashboardItem'>7/8/21</span>
        <span className='DashboardItem'>Violet Brown</span>
        <span className='DashboardItem'>26</span>
        <span className='DashboardItem'>List Button</span>
      </div>
    </>
  );
}

export default DashboardTile;