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
        {
          context.people.map(person => (
              <li key={person.id}>
                <p>{person.first_name} {person.last_name}</p>
                <p>{person.birthday}</p>
                <button><Link to={`/gift-list`}>Gift List</Link></button>
                <button><Link to={`/update-person/${person.id}`}>Update</Link></button>
                <button onClick={() => {
                  deletePerson(person.id)
                  context.onDeletePerson(person.id)
                }}>Delete</button>
              </li>
          ))
        }
      </div>
  );
}

export default Person;