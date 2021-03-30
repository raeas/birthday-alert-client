import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import config from '../config'
import Home from '../Home/Home';
import Header from '../Header/Header';
import About from '../About/About';
import Dashboard from '../Dashboard/Dashboard';
import PersonList from '../PersonList/PersonList';
import AddPerson from '../AddPerson/AddPerson';
import GiftList from '../GiftList/GiftList';
import AddGift from '../AddGift/AddGift';
import UpdatePerson from '../UpdatePerson/UpdatePerson';
import UpdateGift from '../UpdateGift/UpdateGift'
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

  addGift = (gifts) => {
    this.setState({
      gifts: gifts
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

  onDeleteGift = giftId => {
    const newGifts = this.state.gifts.filter(gift =>
      gift.id !== giftId
    )
    this.setState({
      gifts: newGifts
    })
  }

  render() {
    console.log(this.state.people)
    console.log(this.state.gifts)
    const value = {
      people: this.state.people,
      gifts: this.state.gifts,
      addPeople: this.addPeople,
      addGift: this.addGift,
      onDeletePerson: this.onDeletePerson,
      onDeleteGift: this.onDeleteGift
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
            <Route path='/gift-list/:personId' component={GiftList} />
            <Route path='/gift-list/add-gift/:personId' component={AddGift} />
            <Route path='/update-person/:personId' component={UpdatePerson} />
            <Route path='/update-gift/:giftId' component={UpdateGift} />
          </main>
        </div>
      </AppContext.Provider>
    )
  }
}

export default App;
