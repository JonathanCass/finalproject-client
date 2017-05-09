import React from 'react'
import UsersEvents from './UsersEvents'
import UserMatches from './UserMatches'
import Friends from './Friends'
import ActivitySlider from './ActivitySlider'
import 'font-awesome/css/font-awesome.css'
import {connect} from 'react-redux'
import {getUsers} from '../api/messaging'
import {getAvail} from '../api/messaging'

const styles={
    userHomeContainer:{
        width: 1300,  
        display: 'flex',
    },
    header:{
        width: 650,
        fontSize: 32,
        color: '#FFFF00',
        textAlign: 'center',
        height: 40,
        paddingTop: 10,
        marginBottom: 20
    },
    userMain:{
        width: 650,
        padding: 10,
        display: 'inline-flex',
    },
    avatar:{
        width: 200,
        height: 200,
        background: 'white',
        border: '1px solid black',
        borderRadius: 3,
        display: 'inline-block',
        padding: 5
    },
    avatarImg:{
        width: 190,
        height: 190,
        objectFit: 'contain',
        margin: 0
    },
    gridHeader:{
        height: 40,
        paddingTop: 10,
        width: 630,
        fontSize: 32,
        color: '#FFFF00',
        textAlign: 'center',
        display: 'block',
        marginBottom: 10, 
    },
    left:{
        width: 650,
        display: 'inline-block',
        background: 'linear-gradient( to bottom right, #56CCF2 , #2F80ED )',
        paddingBottom: 100
    }
}

class UserHomePage extends React.Component {
//    constructor(props) {
 
//     super(props)
//    }
  componentWillMount(){
  	getUsers()
    getAvail()
  }  
  render() {
    return (
      <div style={styles.userHomeContainer}>
        <div style={styles.left}> 
        <div style={styles.header}>Welcome to Go Vegas! {this.props.dbUsers.users && this.props.dbUsers.users[this.props.currentUserID].fname} </div>
        <div style={styles.userMain}>
            <div style={styles.avatar}><img alt="no error" style={styles.avatarImg} src={this.props.dbUsers.users && this.props.dbUsers.users[this.props.currentUserID].avatar} /></div>
            <ActivitySlider/>
        </div>
        <div style={styles.gridHeader}>User's Created Events</div>
        <UsersEvents />
        <div style={styles.gridHeader} >User's Matches</div>
        <UserMatches availabilityArray={this.props.dbAvail.availability} currentUserID={this.props.currentUserID}/>
        </div>
        <Friends />
      </div>
    )
  }
}

function mapStateToProps(appState){
	return { dbUsers: appState.dbUsers, currentUserID : appState.currentUserId, dbAvail : appState.dbAvail}
}

export default connect(mapStateToProps)(UserHomePage)