import React from 'react'
import {connect} from 'react-redux'
import {getEvents} from '../api/messaging'
import {getUsers} from '../api/messaging'
import {getParks} from '../api/messaging'
import {getActivityIds} from '../api/messaging'
import {Link} from 'react-router-dom'

const styles = {
    GridContainer:{
        width: 650,
        padding: 10,
    },
    gridLabel:{
        width: 151,
        height: 38,
        color: 'white',
        fontSize: 20,
        display: 'inline-block',
        lineHeight: '40px',
        textAlign: 'center',
        fontFamily:'Verdana'
    },
    grid:{
        width:630,
        border: 'solid 1px black',
        borderWidth: '1px 0 1px 1px',
        display: 'flex',
        marginTop: -1
    },
    gridBox:{
        width: 148,
        height: 40,
        border: 'solid 1px black',
        borderWidth: '0 1px 0px 0',
        display: 'inline-block',
        background: '#F2F2F2',
        lineHeight: '42px',
        textAlign: 'center',
        overflow: 'hidden',
        textTransform: 'capitalize',
        fontFamily:'Verdana'
    },
    link:{
        textDecoration: 'none',
        color: '#C81740',
        fontWeight: 'bold'
    },
    time:{
        width: 148,
        height: 40,
        border: 'solid 1px black',
        borderWidth: '0 1px 0px 0',
        display: 'inline-block',
        background: '#F2F2F2',
        lineHeight: '42px',
        textAlign: 'center',
        overflow: 'hidden',
        textTransform: 'uppercase'
    },
    date:{
        textTransform: 'capitalize'
    },
    removeEntry:{
        width: 40,
        height: 40,
        border: 'solid 1px black',
        borderWidth: '0 1px 0px 0',
        display: 'inline-block',
        background: '#1DA2CF',
        color: 'white',
        textAlign: 'center',
        fontSize: 30
    },
    displayNone:{
        display: 'none'
    },
    delete:{
        width:36,
        height:36,
        position: 'relative',
        top: 9
    }
}
class UsersEvents extends React.Component {
//   constructor(props) {
 
//    super(props)
//   }
  componentWillMount(){
  	getUsers()
    getEvents()
    getParks()
    getActivityIds()
  }
  
  renderCreated(){
    if((this.props.events !== undefined ) && (this.props.users !== undefined ) && (this.props.parks !== undefined ) && (this.props.activityIds !== undefined )) {
        return (
            this.props.events.map(event=>(
            <div key={"event id" + event.id} style={ Number(event.user_id1) === Number(this.props.currentUserID)  ?  styles.grid : styles.displayNone }>
                <div style={styles.gridBox}>{event.park} </div>
                <div style={styles.gridBox}><span style={styles.time}> {event.time_start_hour} {event.time_start_suffix} <span style={styles.date}>{event.date_month} {event.date_day}</span></span></div>
                <div style={styles.gridBox}>{event.activity}</div>
                <div style={styles.gridBox}><Link style={styles.link} to={'/UserProfile/' + event.user_id2} >{this.props.users[event.user_id2].fname} {this.props.users[event.user_id2].lname}</Link></div>     
                <div style={styles.removeEntry}><img style={styles.delete} alt="no error" src='http://www.freeiconspng.com/uploads/red-delete-button-png-5.png'/></div>
            </div>
		))
        )
    }else {
        return (
            <span> No currently created activities, Go to Park View and make some if desired. </span>
        )
    }
  }
  render() {
      //console.log('user events component this.props', this.props)
    return (
      <div style={styles.GridContainer}>      
        <div style={styles.gridLabel}>Park</div>
        <div style={styles.gridLabel}>Time</div>
        <div style={styles.gridLabel}>Activity</div>
        <div style={styles.gridLabel}>With</div>
       { this.renderCreated() }
      </div>
    )
  }
}

function mapStateToProps(appState){
	return { activityIds: appState.activityIds.activities, parks: appState.parks, users: appState.dbUsers.users, currentUserID : appState.currentUserId, events : appState.events.event}
}

export default connect(mapStateToProps)(UsersEvents)