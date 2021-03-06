import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './UpdatePerson.css';
import config from '../config';
import AppContext from '../AppContext';
import moment from 'moment'


class UpdatePerson extends Component {

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

  componentDidMount() {
    const { personId } = this.props.match.params
    let person = this.context.people.find(person => person.id === parseInt(personId))
    this.setState({
      person_id: person.id,
      first_name: person.first_name,
      last_name: person.last_name,
      birthday: moment(person.birthday).format('M/D/YYYY')
    })
  }

  handleChange = e => {
    this.setState({[e.target.name]:e.target.value})
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const { personId } = this.props.match.params
    const person = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      birthday: this.state.birthday
    }
    fetch(`${config.API_BASE_URL}/people/${personId}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${config.API_KEY}`
        }, 
        body: JSON.stringify(person),
      })
      .then(res => {
        if(!res.ok)
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
      <div className='UpdatePerson'>
        <div className='UpdatePersonForm'>
          <h2>Update a Birthday</h2>
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
                aria-required='false'
                value={this.state.first_name}
                onChange={this.handleChange}
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
                value={this.state.last_name}
                onChange={this.handleChange}
              />
            </div>
            <div className='field'>
              <label htmlFor='select-birthday'>
                Select Birthday: 
                </label>
              <DatePicker
                value={this.state.birthday}
                onChange={(newDate) => this.setState({birthday: moment(newDate).format('M/D/YYYY')})}
                name='birthday'
                dateFormat='MM/dd/yyyy'/>
              <input type="submit" value="Save Birthday" />
            </div>
          </form>
          <Link to='/person-list'><button>Cancel</button></Link>
        </div>
      </div>
    )
  }
}

export default UpdatePerson;