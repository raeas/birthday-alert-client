import React from 'react';
import { Link } from 'react-router-dom'
import GiftListItem from '../GiftListItem/GiftListItem'
import './GiftList.css'



function GiftList() {
  return (
    <div className='GiftList'>
      <h2>Person's Gift List</h2>
      <button><Link to='/add-gift' className='text-link'>Add Gift</Link></button>
      <GiftListItem />
      <button><Link to='/person-list' className='text-link'>Back to Birthday List</Link></button>
    </div>
  );
}

export default GiftList;