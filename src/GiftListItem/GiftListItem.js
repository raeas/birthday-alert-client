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
              <span className='item2'>{gift.gift_name}</span>
              <div className='Buttons'>
                <Link to={`/update-gift/${gift.id}`}><button>Update</button></Link>
                <button onClick={() => {
                    this.deleteGift(gift.id)
                    this.context.onDeleteGift(gift.id)
                  }}>Delete</button>
              </div>
            </li>
          }
          else {return ''}
        })
    )
  }
}

export default GiftListItem;