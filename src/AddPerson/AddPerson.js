import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './AddPerson.css';
import config from '../config'
import AppContext from '../AppContext';
// import moment from 'moment';


class AddPerson extends Component { 

  static contextType = AppContext

  constructor (props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      birthday: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleChange(birthday) {
    this.setState({
      birthday: birthday
    })
  }

  onFormSubmit(e) {
    e.preventDefault();
    const person = {
      first_name: e.target['first_name'].value,
      last_name: e.target['last_name'].value,
      birthday: e.target['birthday'].value
    }
    fetch(`${config.API_BASE_URL}/people`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${config.API_KEY}`
        },
        body: JSON.stringify(person),
      })
        .then(res => {
          if (!res.ok)
            return res.json().then(error => {
              throw error
          }) 
          fetch(`${config.API_BASE_URL}/people`, {
              method: 'GET',
              headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`
              },
            })
              .then(peopleRes => {
                peopleRes.json()
                  .then(people => {
                    this.context.addPeople(people)
                  })
                this.props.history.push(`/person-list`)
              })
          })
          .catch(error => {
          })
  }

  render() {
    return (
      <div className='AddPerson'>
        <div className='AddPersonForm'>
          <h2>Add a Birthday</h2>
          <form onSubmit={this.onFormSubmit}>
            <div className='field'>
              <label htmlFor='recipient-first-name-input'>
                First Name:
                </label>
              <input
                type='text'
                name='first_name'
                id='first-name-input'
                aria-label='first name of the gift recipient'
                aria-required='true'
                required
              />
            </div>
            <div className='field'>
              <label htmlFor='recipient-last-name-input'>
                Last Name:
                </label>
              <input
                type='text'
                name='last_name'
                id='author-last-name-input'
                aria-label='Last name of the author'
                aria-required='false'
                required
              />
            </div>
            <div className='field'>
              <label htmlFor='select-birthday'>
                Select Birthday: 
                </label>
              <DatePicker 
                selected={this.state.birthday}
                onChange={this.handleChange}
                name='birthday'
                dateFormat='MM/dd/yyyy'
                required />
              <input type="submit" value="Save Birthday" />
            </div>
          </form>
          <Link to='/person-list'><button>Cancel</button></Link>
        </div>
      </div>
    )
  }
}

export default AddPerson;