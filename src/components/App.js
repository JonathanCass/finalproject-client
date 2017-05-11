import React, { Component } from 'react'
import './App.css'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'font-awesome/css/font-awesome.css'
import UserProfile from './UserProfile'
import CreateUser from './CreateUser'
import ParkView from './ParkView'
import Home from './Home'
import UserHomePage from './UserHomePage'
import Header from './Header'


class App extends Component {

  render() {
    return (
        <Router>
          <div>
          <Header cuserid={this.props.currentUserID} />    
                <Route exact={true} path='/' component={Home} /> {/*Greeting Page with Logo and Login / Sign Up*/}
                <Route path='/UserProfile/:userid' component={UserProfile} />        {/*Where Availability results are displayed, User info and availability settings are made here as well*/}
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
    messages: appState.messages, currentUserID : appState.currentUserId
  }
}

export default connect(mapStateToProps)(App)