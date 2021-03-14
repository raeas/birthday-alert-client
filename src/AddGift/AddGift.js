import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AddGift.css'


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
    e.preventDefault();
    this.props.history.push(`/gift-list`)
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