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
          return <ul key={person.id}>
            <h2>{person.first_name} {person.last_name}'s Gift List</h2>
            <button><Link to={`/gift-list/add-gift/${person.id}`}>Add Gift</Link></button>
            <button><Link to={`/person-list`}>Cancel</Link></button>
            <GiftListItem person={person.id}/>
          </ul>
        }
        else {return ''}
      })
    )
  }
}


// function GiftList() {
//   return (
//     <div className='GiftList'>
//       <h2>Person's Gift List</h2>
//       <button><Link to='/add-gift' className='text-link'>Add Gift</Link></button>
//       <GiftListItem />
//       <button><Link to='/person-list' className='text-link'>Back to Birthday List</Link></button>
//     </div>
//   );
// }

export default GiftList;