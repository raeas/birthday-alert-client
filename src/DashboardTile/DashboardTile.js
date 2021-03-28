import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../AppContext';
import './DashboardTile.css';
import moment from 'moment';



class DashboardTile extends Component {
  static contextType = AppContext

  constructor (props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      birthday: '',
      age: '',
      daysUntil: ''
    };
  }

  calculateAge = (date) => {
    var birthday = moment(date);
    var today = moment().format("YYYY-MM-DD");
    var age = moment(today).diff(birthday, 'years');
    moment(age).format("YYY-MM-DD");
    return 'Current age: ' + age;
  }

  daysUntil = (date) => {
    var birthday = moment(date);
    var today = moment().format("YYYY-MM-DD");
    // calculate age of the person
    var age = moment(today).diff(birthday, 'years');
    moment(age).format("YYYY-MM-DD");
    // console.log('person age', age);
    var nextBirthday = moment(birthday).add(age, 'years');
    moment(nextBirthday).format("YYYY-MM-DD");
    /* added one more year in case the birthday has already passed
    to calculate date till next one. */
    if (nextBirthday.isSame(today)) {
      return 'Happy Birthday!!';
    } else {
      nextBirthday = moment(birthday).add(age + 1, 'years');
      return 'Days until next birthday:' + ' ' + nextBirthday.diff(today, 'days');
    }
  }

  render() {
    return (
      <div className='DashboardTile'>
        {
          this.context.people.map(person => (
              <li key={person.id}>
                <span className='DashboardItem'>{person.first_name} {person.last_name}</span>
                <span className='DashboardItem'>DOB: {person.birthday}</span>
                <span className='DashboardItem'>{this.calculateAge(person.birthday)}</span>
                <span className='DashboardItem'>{this.daysUntil(person.birthday)}</span>
                <div className='Buttons'>
                  <button className='item'><Link to={`/gift-list/${person.id}`}>Gift List</Link></button>
                </div>
              </li>
          ))
        }
      </div>
    );
  }
}


export default DashboardTile;