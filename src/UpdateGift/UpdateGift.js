import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UpdateGift.css';
import config from '../config';
import AppContext from '../AppContext';


class UpdateGift extends Component {

  static contextType = AppContext

  constructor (props) {
    super(props)
    this.state = {
      id: '',
      person: '',
      gift_name: '',
      first_name: '',
      last_name: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    console.log('update-gift-props ', this.props)
  }

  componentDidMount() {
    const { giftId } = this.props.match.params
    let gift = this.context.gifts.find(gift => gift.id === parseInt(giftId))
    // const person = parseInt(personId)
    let person = this.context.people.find(person => gift.person === person.id)
    console.log('person ', person)
    console.log('gift ', gift)
    this.setState({
      id: gift.id,
      person: gift.person,
      gift_name: gift.gift_name,
      first_name: person.first_name,
      last_name: person.last_name
    })
  }

  handleChange = e => {
    this.setState({[e.target.name]:e.target.value})
  }

  onFormSubmit(e) {
    e.preventDefault(e);
    const { giftId } = this.props.match.params
    const gift = {
      id: this.state.id,
      gift_name: e.target['gift_name'].value,
      person: this.state.person
    }
    fetch(`${config.API_BASE_URL}/gifts/${giftId}`, {
        method: 'PATCH',
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
                this.props.history.push(`/gift-list/${this.state.person}`)
              })
          })
          .catch(error => {
            console.log({ error })
          })
  }

  render() {
    // const { personId } = this.props.match.params
    // const person = parseInt(personId)
    // console.log('person ', personId)
    // console.log(this.context.people)
    // let person = this.context.people.find(person => person.id === parseInt(personId))
    console.log(this.state)
    return (
      <div className='AddGift'>
        <div className='AddGiftForm'>
          <h2>Update Gift on {this.state.first_name} {this.state.last_name}'s Gift List</h2>
          <form onSubmit={this.onFormSubmit}>
            <div className='field'>
              <label htmlFor='name-of-gift-input'>
                Gift:
                </label>
              <input
                type='text'
                name='gift_name'
                id='gift-input'
                aria-label='name of gift'
                aria-required='true'
                value={this.state.gift_name}
                onChange={this.handleChange}
              />
            </div>
            <input type="submit" value="Save" />
          </form>
          <button><Link to={`/gift-list/${this.state.person}`}>Cancel</Link></button>
        </div>
      </div>
    )
  }
}


export default UpdateGift;