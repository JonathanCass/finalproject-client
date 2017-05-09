import React from 'react'
import {connect} from 'react-redux'
import {getEvents} from '../api/messaging'
import {getUsers} from '../api/messaging'
import {getParks} from '../api/messaging'
import {getActivityIds} from '../api/messaging'

const styles={
    nextBlock:{
        width: 430,
        display: 'inline-block',
        padding: 10,
        marginLeft: 10
    },
    nextLabel:{ 
        display: 'flex',
        justifyContent: 'space-between', 
        width: 413,
        height: 50,
        fontSize: 26,
        color: 'white',
        textAlign: 'center',
        marginBottom: 10,
        paddingTop: 5,
        lineHeight: '40px'
    },
    arrowButton:{
        height:40,
        width:40,
        borderRadius: 5,
        background: "white",
        color: '#C81740',
        fontSize: 24
    },
    nextGrid:{
        border: 'solid 1px black',
        borderWidth: '1px 0 0 1px',
        width: 413,
        height: 120,
    },
    gridEntry:{
        height: 40,
        width: 206,
        border: 'solid 1px black',
        borderWidth: '0 1px 1px 0',
        display: 'inline-block',
        textAlign: 'center',
        lineHeight: '42px',
        color: 'white',
        background: '#53BE16',
        textTransform: 'capitalize'
    },
    gridWith:{
        height: 40,
        width: 412,
        border: 'solid 1px black',
        borderWidth: '0 1px 1px 0',
        display: 'inline-block',
        textAlign: 'center',
        lineHeight: '42px',
        color: 'white',
        background: '#53BE16',
        textTransform: 'capitalize'
    },
}
class ActivitySlider extends React.Component {
   constructor(props) {
     super(props)
   }
  componentWillMount(){
  	getUsers()
    getEvents()
    getParks()
    getActivityIds()
  }
  renderActivity(){
    if(this.props.events && this.props.users && this.props.parks && this.props.activityIds) {
        return (
            <div style={styles.nextBlock}>    
                <div style={styles.nextLabel}><button style={styles.arrowButton}><i className="fa fa-arrow-left" aria-hidden="true"></i></button><span>Your Scheduled Activities</span><button style={styles.arrowButton}><i className="fa fa-arrow-right" aria-hidden="true"></i></button></div>
                <div style={styles.nextGrid}>
                    <div style={styles.gridEntry}>Date</div>
                    <div style={styles.gridEntry}>{this.props.parks[this.props.events[0].park_id].name}</div>
                    <div style={styles.gridEntry}>{this.props.events[0].time_start}</div>
                    <div style={styles.gridEntry}>{this.props.activityIds[this.props.events[0].activity_id -1].name}</div>
                    <div style={styles.gridWith}>{this.props.users[this.props.events[0].user_id1].fname} {this.props.users[this.props.events[0].user_id1].lname} and {this.props.users[this.props.events[0].user_id2].fname} {this.props.users[this.props.events[0].user_id2].lname} </div>
                </div>
        </div>
        )
    }else {
        return (
            <span> No current activities, Go to Park View and find some to join or create. </span>
        )
    }
  }
  render() {
    console.log("Activity Slider this.props", this.props)
    return (
      <div>
        { this.renderActivity() }
      </div>
    )
  }
}

function mapStateToProps(appState){
	return { activityIds: appState.activityIds.activities, parks: appState.parks.parks, users: appState.dbUsers.users, currentUserID : appState.currentUserId, events : appState.events.event}
}

export default connect(mapStateToProps)(ActivitySlider)