import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../AppContext';
import GiftListItem from '../GiftListItem/GiftListItem';
import './GiftList.css';


class GiftList extends Component {

  static contextType = AppContext

  state = {
    people: this.context.people,
    gifts: this.context.gifts
  }

  render() {
    const { personId } = this.props.match.params
    console.log(personId)
    console.log(this.context.people)
    return (
  
      this.context.people.map(person => {
        if (personId == person.id) {
          return <ul className='GiftList' key={person.id}>
              <li>
                <h2>{person.first_name} {person.last_name}'s Gift List</h2>
                <div className='Buttons'>
                  <Link to={`/gift-list/add-gift/${person.id}`}><button>Add Gift</button></Link>
                  <Link to={`/person-list`}><button>Cancel</button></Link>
                </div>
                <GiftListItem person={person.id}/>
              </li>
          </ul>
        }
        else {return ''}
      })
    )
  }
}

export default GiftList;