import React from 'react';
import { Link } from 'react-router-dom'
import './GiftListItem.css'



function GiftListItem() {
  return (
    <>
      <div className='GiftListItem'>
        <ul>
          <li>Gift 1</li>
        </ul>
        <button>Check</button>
        <button><Link to={`/update-person`}>Update</Link></button>
        <button onClick={() => {
        }}>Delete</button>
    </div>
    <div className='GiftListItem'>
        <ul>
          <li>Gift 2</li>
        </ul>
        <button>Check</button>
        <button><Link to={`/update-person`}>Update</Link></button>
        <button onClick={() => {
        }}>Delete</button>
    </div>
    <div className='GiftListItem'>
        <ul>
          <li>Gift 3</li>
        </ul>
        <button>Check</button>
        <button><Link to={`/update-person`}>Update</Link></button>
        <button onClick={() => {
        }}>Delete</button>
    </div>
    <div className='GiftListItem'>
        <ul>
          <li>Gift 4</li>
        </ul>
        <button>Check</button>
        <button><Link to={`/update-person`}>Update</Link></button>
        <button onClick={() => {
        }}>Delete</button>
    </div>
    <div className='GiftListItem'>
        <ul>
          <li>Gift 5</li>
        </ul>
        <button>Check</button>
        <button><Link to={`/update-person`}>Update</Link></button>
        <button onClick={() => {
        }}>Delete</button>
    </div>
  </>
  );
}

export default GiftListItem;