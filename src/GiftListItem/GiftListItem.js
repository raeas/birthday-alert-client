import React, { Component } from 'react';
import AppContext from '../AppContext';
import { Link } from 'react-router-dom'
import './GiftListItem.css';
import config from '../config';

class GiftListItem extends Component {

  static contextType = AppContext

  state = {
    people: this.context.people,
    gifts: this.context.gifts
  }

  
  deleteGift(giftId) {
    fetch(`${config.API_BASE_URL}/gifts/${giftId}`, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${config.API_KEY}`
      },
      body: JSON.stringify(giftId),
    })
    .then(res => {
      if (!res.ok)
        return res.json().then(e => Promise.reject(e))
    })
    .catch(error => {
      console.error(error)
    })
  }

  render() {
    const person = this.props.person
    return(
        this.context.gifts.map(gift => {
          if (person === gift.person) {
            return <li key={gift.id}>
              <p>{gift.gift_name}</p>
              <button><Link to={`/update-gift/${gift.id}`}>Update</Link></button>
              <button onClick={() => {
                  this.deleteGift(gift.id)
                  this.context.onDeleteGift(gift.id)
                }}>Delete</button>
              <button>Check</button>
            </li>
          }
          else {return ''}
        })
    )
  }
}

// function GiftListItem() {
//   return (
//     <>
//       <div className='GiftListItem'>
//         <ul>
//           <li>Gift 1</li>
//         </ul>
//         <button>Check</button>
//         <button><Link to={`/update-person`}>Update</Link></button>
//         <button onClick={() => {
//         }}>Delete</button>
//     </div>
//     <div className='GiftListItem'>
//         <ul>
//           <li>Gift 2</li>
//         </ul>
//         <button>Check</button>
//         <button><Link to={`/update-person`}>Update</Link></button>
//         <button onClick={() => {
//         }}>Delete</button>
//     </div>
//     <div className='GiftListItem'>
//         <ul>
//           <li>Gift 3</li>
//         </ul>
//         <button>Check</button>
//         <button><Link to={`/update-person`}>Update</Link></button>
//         <button onClick={() => {
//         }}>Delete</button>
//     </div>
//     <div className='GiftListItem'>
//         <ul>
//           <li>Gift 4</li>
//         </ul>
//         <button>Check</button>
//         <button><Link to={`/update-person`}>Update</Link></button>
//         <button onClick={() => {
//         }}>Delete</button>
//     </div>
//     <div className='GiftListItem'>
//         <ul>
//           <li>Gift 5</li>
//         </ul>
//         <button>Check</button>
//         <button><Link to={`/update-person`}>Update</Link></button>
//         <button onClick={() => {
//         }}>Delete</button>
//     </div>
//   </>
//   );
// }

export default GiftListItem;