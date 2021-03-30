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
        <Link to={`/add-person`}><button>Add Birthday</button></Link>
        <Person />
      </div>
    );
  }
}

export default PersonList;