import React from 'react'
import {connect} from 'react-redux'
import {getEvents} from '../api/messaging'
import {getUsers} from '../api/messaging'
import {getParks} from '../api/messaging'
import {getActivityIds} from '../api/messaging'

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
        textAlign: 'center'
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
    if(this.props.events && this.props.users && this.props.parks && this.props.activityIds) {
        return (
            this.props.events.map(event=>(
            <div key={"event id" + event.id} style={ event.user_id1 === this.props.currentUserID  ?  styles.grid : styles.displayNone }>
                <div style={styles.gridBox}>{this.props.parks[event.park_id].name} </div>
                <div style={styles.gridBox}>{event.time_start} </div>
                <div style={styles.gridBox}>{this.props.activityIds[event.activity_id-1].name}</div>
                <div style={styles.gridBox}>{this.props.users[event.user_id2-1].fname} {this.props.users[event.user_id2-1].lname}</div>
                <div style={styles.removeEntry}>-</div>
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
      console.log('user events component this.props', this.props)
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
	return { activityIds: appState.activityIds.activities, parks: appState.parks.parks, users: appState.dbUsers.users, currentUserID : appState.currentUserId, events : appState.events.event}
}

export default connect(mapStateToProps)(UsersEvents)