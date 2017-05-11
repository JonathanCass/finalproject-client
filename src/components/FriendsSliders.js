import React from 'react'
import {connect} from 'react-redux'
import {getEvents} from '../api/messaging'
import {getUsers} from '../api/messaging'
import {getParks} from '../api/messaging'
import {getActivityIds} from '../api/messaging'
import {Link} from 'react-router-dom'

const styles={
    nextBlock:{
        width: 430,
        display: 'inline-block',
        padding: 10,
        marginLeft: 100
    },
    nextLabel:{ 
        display: 'flex',
        justifyContent: 'space-between', 
        width: 413,
        height: 50,
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
        marginBottom: 10,
        paddingTop: 5,
        lineHeight: '24px'
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
    displayNone:{
      display:'none'
    },
    displayHidden:{
      visibility: 'hidden'
    },
    displayNormal:{
    visibility: 'visible'
   },
    displayUnderline:{
        color: '#151517'
    },
    time:{
      textTransform: 'uppercase'
    },
    link:{
        textDecoration: 'none',
        color: '#C81740',
        fontWeight: 'bold'
    },
    needsPartner:{
      fontSize: 20,
      color: 'red',
      background: 'white',
      borderRadius: 15,
      textDecoration: 'none',
      marginLeft: 5,
      paddingRight: 5,
      border: 'solid .5px black'
    }
}
class FriendsSliders extends React.Component {
   constructor(props) {
     super(props)
     this.state={
       involvedIndex:0, friendsTestArray : [2,7,8,9,14]
     }
   }
  componentWillMount(){
  	getUsers()
    getEvents()
    getParks()
    getActivityIds()
  }
  handleNext = (e) => {
  		e.preventDefault() 
		  this.setState({
        involvedIndex : this.state.involvedIndex + 1
      })
  }
  handlePrevious = (e) => {
    e.preventDefault()
    this.setState({
      involvedIndex : this.state.involvedIndex - 1
    })
  }
  renderActivity(){
    if(this.props.events && this.props.users && this.props.parks && this.props.activityIds) {
      
      var involvedArray = this.props.events.filter(function(event){
            return( this.state.friendsTestArray.indexOf(event.user_id1) !== -1 || this.state.friendsTestArray.indexOf(event.user_id2) !== -1 )
        }.bind(this))
      //console.log('involvedArray', involvedArray)
        return (
          involvedArray.map((event, i) =>(
            <div style={ i === this.state.involvedIndex ? styles.nextBlock : styles.displayNone } key={event.id}>    
                <div style={styles.nextLabel}><button onClick={this.handlePrevious} style={ this.state.involvedIndex === 0 ? styles.displayHidden : styles.arrowButton}><i className="fa fa-arrow-left" aria-hidden="true"></i></button><span> <span style={ this.state.friendsTestArray.indexOf(event.user_id1) === -1 ?  styles.displayNone : styles.displayUnderline  }>Your Friend <Link style={styles.link} to={'/UserProfile/' + event.user_id1} >{this.props.users[event.user_id1].fname} {this.props.users[event.user_id1].lname}</Link></span> <span style={ this.state.friendsTestArray.indexOf(event.user_id1) !== -1 && this.state.friendsTestArray.indexOf(event.user_id2) !== -1 ?  styles.displayUnderline : styles.displayNone  } >with</span> <span style={ this.state.friendsTestArray.indexOf(event.user_id2) === -1 ?  styles.displayNone : styles.displayUnderline  } >Your Friend <Link style={styles.link} to={'/UserProfile/' + event.user_id2} >{this.props.users[event.user_id2].fname} {this.props.users[event.user_id2].lname}</Link> </span> </span><button onClick={this.handleNext} style={ this.state.involvedIndex + 1 < involvedArray.length  ? styles.arrowButton : styles.displayHidden}><i className="fa fa-arrow-right" aria-hidden="true"></i></button></div>
                <div style={styles.nextGrid}>
                    <div style={styles.gridEntry}>{event.date_month} {event.date_day}</div>
                    <div style={styles.gridEntry}>{this.props.parks[event.park_id].name}</div>
                    <div style={styles.gridEntry}><span style={styles.time} > {event.time_start_hour} { event.time_start_suffix} </span></div>
                    <div style={styles.gridEntry}>{this.props.activityIds[event.activity_id -1].name}</div>
                    <div style={styles.gridWith}>{this.props.users[event.user_id1].fname} {this.props.users[event.user_id1].lname}<span style={ event.user_id2 === 0 ? styles.displayNone : styles.displayNormal }> and {this.props.users[event.user_id2].fname} {this.props.users[event.user_id2].lname} </span><Link to='/ParkView/' style={ event.user_id2 === 0 ? styles.needsPartner : styles.displayNone } > needs a partner click for info</Link> </div>
                </div>
          </div>
          ))
        )
    }else {
        return (
            <span> No Friends with Actitivies, try expanding your availability and adding some new friends. </span>
        )
    }
  }
  render() {
    //console.log("Activity Slider this.props", this.props)
    return (
      <div>
        { this.renderActivity() }
      </div>
    )
  }
}

function mapStateToProps(appState){
	return { activityIds: appState.activityIds.activities, parks: appState.parks, users: appState.dbUsers.users, currentUserID : appState.currentUserId, events : appState.events.event}
}

export default connect(mapStateToProps)(FriendsSliders)