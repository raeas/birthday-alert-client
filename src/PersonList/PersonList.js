import React from 'react';
import Person from '../Person/Person'
import './PersonList.css'


function PersonList() {
  return (
    <div className='PersonList'>
      <h2>Birthday List</h2>
      <Person />
    </div>
  );
}

export default PersonList;