import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AddGift.css';
import config from '../config';
import AppContext from '../AppContext';


class AddGift extends Component {

  static contextType = AppContext

  constructor (props) {
    super(props)
    this.state = {
      person: '',
      first_name: '',
      last_name: '',
      gift_name: ''
    };
    // this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    console.log('add-gift-props ', this.props)
  }

  // handleChange(date) {
  //   this.setState({
  //     startDate: date
  //   })
  // }

  componentDidMount() {
    const { personId } = this.props.match.params
    let person = this.context.people.find(person => person.id === parseInt(personId))
    // const person = parseInt(personId)
    console.log('person ', person)
    this.setState({
      person: person.id,
      first_name: person.first_name,
      last_name: person.last_name
    })
  }

  onFormSubmit(e) {
    e.preventDefault(e);
    const gift = {
      gift_name: e.target['gift_name'].value,
      person: this.state.person
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
                this.props.history.push(`/gift-list/${this.state.person}`)
              })
          })
          .catch(error => {
            console.log({ error })
          })
  }

  render() {
    const { personId } = this.props.match.params
    const person = parseInt(personId)
    // console.log('personId ', personId)
    // console.log(this.context.people)
    // let person = this.context.people.find(person => person.id === parseInt(personId))
    console.log(this.state)
    return (
      <div className='AddGift'>
        <div className='AddGiftForm'>
          <h2>Add a Gift to {this.state.first_name} {this.state.last_name}'s Gift List</h2>
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
              />
            </div>
            <input type="submit" value="Save" />
          </form>
          <button><Link to={{pathname: 'gift-list', state: {person}}}>Cancel</Link></button>
        </div>
      </div>
    )
  }
}

export default AddGift;