import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../AppContext';
import Person from '../Person/Person';
import './PersonList.css';

class PersonList extends Component{

  static contextType = AppContext;

  state = {
    people: this.context.people
  }

  render(){
    return (
      <div className='PersonList'>
        <h2>Birthday List</h2>
        <button><Link to={`/add-person`}>Add Birthday</Link></button>
        <Person />
      </div>
    );
  }
}

export default PersonList;