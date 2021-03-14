import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import './UpdatePerson.css'


class UpdatePerson extends Component {

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
    e.preventDefault();
    console.log(this.state.startDate)
    this.props.history.push(`/person-list`)
  }

  render() {
    return (
      <div className='AddPerson'>
        <div className='AddPersonForm'>
          <h2>Update a Birthday</h2>
          <form onSubmit={this.onFormSubmit}>
            <div className='field'>
              <label htmlFor='recipient-first-name-input'>
                First Name:
                </label>
              <input
                type='text'
                name='first-name'
                id='first-name-input'
                aria-label='first name of the gift recipient'
                aria-required='false'
              />
            </div>
            <div className='field'>
              <label htmlFor='recipient-last-name-input'>
                Last Name:
                </label>
              <input
                type='text'
                name='last-name'
                id='author-last-name-input'
                aria-label='Last name of the author'
                aria-required='false'
              />
            </div>
            <div className='field'>
              <label htmlFor='select-birthday'>
                Select Birthday: 
                </label>
              <DatePicker 
                selected={this.state.startDate}
                onChange={this.handleChange}
                name='startDate'
                dateFormat='MM/dd/yyyy'/>
              <input type="submit" value="Save Birthday" />
            </div>
          </form>
          <button><Link to='/person-list'>Cancel</Link></button>
        </div>
      </div>
    )
  }
}

export default UpdatePerson;