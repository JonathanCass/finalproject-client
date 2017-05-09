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
        background: '#53BE16'
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
        background: '#53BE16'
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
  render() {
    console.log("Activity Slider this.props", this.props)
    return (
      <div>
        <div style={styles.nextBlock}>    
                <div style={styles.nextLabel}><button style={styles.arrowButton}><i className="fa fa-arrow-left" aria-hidden="true"></i></button><span>Your Scheduled Activities</span><button style={styles.arrowButton}><i className="fa fa-arrow-right" aria-hidden="true"></i></button></div>
                <div style={styles.nextGrid}>
                    <div style={styles.gridEntry}>Date</div>
                    <div style={styles.gridEntry}>Location</div>
                    <div style={styles.gridEntry}>Hour AM/PM</div>
                    <div style={styles.gridEntry}>Activity</div>
                    <div style={styles.gridWith}>Partner (User Profile Link)</div>
                </div>
            </div>
      </div>
    )
  }
}

function mapStateToProps(appState){
	return { activityIds: appState.activityIds.activities, parks: appState.parks.parks, users: appState.dbUsers.users, currentUserID : appState.currentUserId, events : appState.events.event}
}

export default connect(mapStateToProps)(ActivitySlider)