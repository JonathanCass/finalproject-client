import React, { Component } from 'react'
import './App.css'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'font-awesome/css/font-awesome.css'
import UserProfile from './UserProfile'
import CreateUser from './CreateUser'
import ParkView from './ParkView'
import Home from './Home'
import UserHomePage from './UserHomePage'



class App extends Component {
  constructor() {
    super()
    this.state = {
      login: ''
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()   
    console.log('here')
  }
  handleClick = (e) => {
    e.preventDefault()
    // this.props.history.push('/UserHomePage/')
    console.log('clicked')
  }
  handleChange = (e) => {
    console.log('changed')
    this.setState =({
      [e.target.name]:e.target.value
      
    })
 }
  render() {
    return (
        <Router>
          <div>	
            <img alt='' id="logo" src={require('../assets/Logo.png')}/>
            <form onSubmit={this.handleSubmit} className="user">
              <button id='signup' onClick={this.handleClick}><Link to={'/CreateUser/'} style={{textDecoration:'none'}}>Sign Up</Link></button>
              <input type='text' onChange={this.handleChange} name='login' placeholder='Login' />
            </form>
          <div id='social'>
            <i className="fa fa-facebook-square" aria-hidden="true"></i>
            <i className="fa fa-twitter-square" aria-hidden="true"></i>
            <i className="fa fa-rss-square" aria-hidden="true"></i>
          </div>
          <div className="links">
            <Link to={'/'} id='home'>Home</Link>
            <Link to={'/CreateUser/'} id='createUser'>Create User</Link>
            <Link to={'/UserProfile/'} id='userProfile'>UserProfile</Link>
            <Link to={'/UserHomePage/'} id='userHomePage'>UserHomePage</Link>
            <Link to={'/ParkView/'} id='parkView'>ParkView</Link>
          </div>      
                <Route exact={true} path='/' component={Home} /> {/*Greeting Page with Logo and Login / Sign Up*/}
                <Route path='/UserProfile/' component={UserProfile} />        {/*Where Availability results are displayed, User info and availability settings are made here as well*/}
                <Route path='/CreateUser/' component={CreateUser} />      {/*Initial Profile Construction*/}
                <Route path='/ParkView/' component={ParkView} />   {/*Create Event Listings here*/}
                <Route path='/UserHomePage/' component={UserHomePage} /> 
          </div>
      </Router>
    )
  }
}

const mapStateToProps = function(appState) {
  return {
    messages: appState.messages
  }
}

export default connect(mapStateToProps)(App)