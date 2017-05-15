import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {getUsers} from '../api/messaging'
import styles from './NewHome.styles'

class NewHome extends React.Component {
//     constructor() {
//         super()
//     }
// }

componentWillMount() {
  getUsers()
}

render() {
    return(
            <div className="container" style={styles.container}>
                <div style={styles.homeDiv}>
                    <h2 style={styles.homeText}>See what's happening</h2>
                    <h3 style={styles.homeSubText}>Stay updated with users in your area and go !</h3>
                    <Link to={'/Home'} style={styles.homeLink}><i className="fa fa-home" aria-hidden="true" style={styles.fontAwesome}></i>Home</Link>
                </div>
                {/*<div style={styles.createDiv}>
                    <h2 style={styles.createText}>Sign up, personalize your account, and get matched</h2>
                    <Link to={'/CreateUser'} style={styles.createLink}><i className="fa fa-user-plus" aria-hidden="true" style={styles.fontAwesome}></i>Create User</Link>
                </div>*/}
                <div style={styles.profileDiv}>
                    <img alt='matched' src={this.props.dbUsers.users && this.props.dbUsers.users[this.props.currentUserID].avatar} style={styles.profileAvatar}/>
                    <Link to={'/UserProfile/' + this.props.cuserid} style={styles.profileLink}><i className="fa fa-user" aria-hidden="true" style={styles.fontAwesome}></i>User Profile</Link>
                    <h3 style={styles.profileText}>Personalize your account and find a match</h3>
                    <div style={styles.profileSubDiv}>
                        <Link to={'UserHomePage/'} style={styles.userLink}><i className="fa fa-info-circle" aria-hidden="true" style={styles.fontAwesome}></i>User Page</Link>
                    </div>
                </div>
                <div style={styles.parkDiv}>
                    <h2 style={styles.parkText}>Create an activity for others to join</h2>
                    <h3 style={styles.parkSubText}>Set your own type of activity, time, and park location</h3>
                    <Link to={'/ParkView/'} style={styles.parkLink}><i className="fa fa-map-marker" aria-hidden="true" style={styles.fontAwesome}></i>Park View</Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(appState){
	return {home: appState.home, dbUsers: appState.dbUsers, currentUserID : appState.currentUserId}
}

export default connect(mapStateToProps)(NewHome)