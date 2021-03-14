import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from '../Home/Home'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import About from '../About/About'
import Dashboard from '../Dashboard/Dashboard'
import PersonList from '../PersonList/PersonList'
import AddPerson from '../AddPerson/AddPerson'
import GiftList from '../GiftList/GistList'
import AddGift from '../AddGift/AddGift'
import './App.css';
import UpdatePerson from '../UpdatePerson/UpdatePerson';


class App extends Component {
  render() {
    return(
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
          <Route path='/update-person' component={UpdatePerson} />
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
