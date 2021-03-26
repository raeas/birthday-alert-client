import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AddGift.css';
import config from '../config';


class AddGift extends Component {

  constructor (props) {
    super(props)
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    console.log('add-person-props ', this.props)
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
  }

  onFormSubmit(e) {
    e.preventDefault(e);
    const gift = {
      gift_name: e.target['gift_name'].value,
      person: e.target['birthday'].value
    }
    fetch(`${config.API_BASE_URL}/gifts`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${config.API_KEY}`
        },
        body: JSON.stringify(gift),
      })
        .then(res => {
          if (!res.ok)
            return res.json().then(error => {
              throw error
          }) 
          fetch(`${config.API_BASE_URL}/gifts`, {
              method: 'GET',
              headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`
              },
            })
              .then(giftsRes => {
                giftsRes.json()
                  .then(gifts => {
                    console.log('Add Gift ', gift)
                    this.context.addGift(gifts)
                  })
                this.props.history.push(`/person-list`)
              })
          })
          .catch(error => {
            console.log({ error })
          })
  }

  render() {
    return (
      <div className='AddGift'>
        <div className='AddGiftForm'>
          <h2>Add a Gift</h2>
          <form onSubmit={this.onFormSubmit}>
            <div className='field'>
              <label htmlFor='name-of-gift-input'>
                Gift:
                </label>
              <input
                type='text'
                name='gift-name'
                id='gift-input'
                aria-label='name of gift'
                aria-required='true'
              />
            </div>
            <input type="submit" value="Save" />
          </form>
          <button><Link to='gift-list'>Cancel</Link></button>
        </div>
      </div>
    )
  }
}

export default AddGift;