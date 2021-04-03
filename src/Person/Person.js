import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../AppContext';
import './Person.css';
import config from '../config';

function Person() {

  const context = useContext(AppContext)

  function deletePerson(personId) {
    fetch(`${config.API_BASE_URL}/people/${personId}`, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${config.API_KEY}`
      },
      body: JSON.stringify(personId),
    })
    .then(res => {
      if (!res.ok)
        return res.json().then(e => Promise.reject(e))
    })
    .catch(error => {
      console.error(error)
    })
  }

  return (
      <div className='Person'>
        <ul>
          {
            context.people.map(person => (
                <li key={person.id}>
                  <div className='PersonDetails'>
                    <span className='item2'>{person.first_name} {person.last_name}</span>
                    <span className='item2'>{person.birthday.slice(0, 10)}</span>
                  </div>
                  <div className='Buttons'>
                    <Link to={`/gift-list/${person.id}`}><button className='item'>Gift List</button></Link>
                    <Link to={`/update-person/${person.id}`}><button className='item'>Update</button></Link>
                    <button className='item' onClick={() => {
                      deletePerson(person.id)
                      context.onDeletePerson(person.id)
                    }}>Delete</button>
                  </div>
                </li>
            ))
          }
        </ul>
      </div>
  );
}

export default Person;