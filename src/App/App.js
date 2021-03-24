import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import config from '../config'
import Home from '../Home/Home';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Dashboard from '../Dashboard/Dashboard';
import PersonList from '../PersonList/PersonList';
import AddPerson from '../AddPerson/AddPerson';
import GiftList from '../GiftList/GiftList';
import AddGift from '../AddGift/AddGift';
import UpdatePerson from '../UpdatePerson/UpdatePerson';
import './App.css';
import AppContext from '../AppContext'


class App extends Component {
  state = {
    people: [],
    gifts: [],
    // newPeople: []
  }

  async componentDidMount() {
    let peopleRes = await fetch(`${config.API_BASE_URL}/people`, 
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${config.API_KEY}`
        }
      })
    let people = await peopleRes.json()
    let giftsRes = await fetch(`${config.API_BASE_URL}/gifts`, 
    {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${config.API_KEY}`
    }
  })
    let gifts = await giftsRes.json()
    this.setState({people, gifts})
  }

  addPeople = (people) => {
    this.setState({
      people: people
    })
  }

  onDeletePerson = personId => {
    const newPeople = this.state.people.filter(person =>
      person.id !== personId
    )
    this.setState({
      people: newPeople
    })
  }

  render() {
    console.log(this.state.people)
    console.log(this.state.gifts)
    const value = {
      people: this.state.people,
      gifts: this.state.gifts,
      addPeople: this.addPeople,
      onDeletePerson: this.onDeletePerson
    }
    return(
      <AppContext.Provider value={value}>
        <div className='App'>
          <Header />
          <main>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/person-list' component={PersonList} />
            <Route path='/add-person' component={AddPerson} />
            <Route path='/gift-list' component={GiftList} />
            <Route path='/add-gift' component={AddGift} />
            <Route path='/update-person/:personId' component={UpdatePerson} />
          </main>
          <Footer />
        </div>
      </AppContext.Provider>
    )
  }
}

export default App;
