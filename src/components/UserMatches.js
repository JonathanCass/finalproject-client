import React from 'react'
import {connect} from 'react-redux'
import {addMatch} from '../api/messaging'

const styles={
    matchesContainer:{
        width: 629,
        marginLeft: 10,
        display: 'flex',
        flexWrap: 'wrap',
    },
    matchBox:{
        width: 157,
        height: 237,
        border: 'solid 1px black',
        borderWidth: '0 1px 1px 0 ',
        background: 'white'
    },
    matchAvatar:{
        width:156,
        height:156,
        background: 'white',
        border: 'solid 1px black',
        borderWidth: '0 0 1px 0',
    },
    matchImage:{
        width: 156,
        height: 156,
        objectFit: 'contain',
        margin: 0,
        padding: 5
    },
    matchLine:{
        width:156,
        height: 40,
        fontSize: 14,
        border: 'solid 1px black',
        borderWidth: '1px 0 1px 0',
        lineHeight: '40px',
        textAlign: 'center',
        background: '#53BE16',
        color: 'white'
    },
    displayNone:{
        display: 'none'
    }
}
class UserMatches extends React.Component {
   constructor(props) {
        super(props)
        this.state = {
            matchIDs : []
        }
   }

  handleMatches = () => {
      
      if(this.props.availabilityArray){
        var currentUserArray = this.props.availabilityArray.filter(function(entry){
            return( entry.user_id === this.props.currentUserID)
        }.bind(this))
        // this is creating the currentUserArray, just the users availability blocks to check against the rest of the block
      }
      if(this.props.availabilityArray){
        var fromTime = 0
        var toTime = 0
        var cUserFrom = 0
        var cUserTo = 0
        for( let i = 0; i < this.props.availabilityArray.length ; i++ ){
            for( let j = 0; j < currentUserArray.length ; j++ ){
                if(currentUserArray[j].quadrant === this.props.availabilityArray[i].quadrant && currentUserArray[j].day_of_week === this.props.availabilityArray[i].day_of_week && currentUserArray[j].user_id !== this.props.availabilityArray[i].user_id){
                    if(this.props.availabilityArray[i].from_num === 12 && this.props.availabilityArray[i].from_suffix === 'pm'){
                        fromTime = 12
                    }
                    else if(this.props.availabilityArray[i].from_num === 12 && this.props.availabilityArray[i].from_suffix === 'am'){
                        fromTime = 24
                    }
                    else if(this.props.availabilityArray[i].from_suffix === 'am'){
                        fromTime = this.props.availabilityArray[i].from_num
                    }
                    else if(this.props.availabilityArray[i].from_suffix === 'pm'){
                        fromTime = this.props.availabilityArray[i].from_num + 12
                    }
                    //console.log('UserMatches adjusted fromTime', fromTime)
                    if(this.props.availabilityArray[i].to_num === 12 && this.props.availabilityArray[i].to_suffix === 'pm'){
                        toTime = 12
                    }
                    else if(this.props.availabilityArray[i].to_num === 12 && this.props.availabilityArray[i].to_suffix === 'am'){
                        toTime = 24
                    }
                    else if(this.props.availabilityArray[i].to_suffix === 'am'){
                        toTime = this.props.availabilityArray[i].to_num
                    }
                    else if(this.props.availabilityArray[i].to_suffix === 'pm'){
                        toTime = this.props.availabilityArray[i].to_num + 12
                    }
                    //console.log('UserMatches adjusted toTime', toTime)
                    if(currentUserArray[j].from_num === 12 && currentUserArray[j].from_suffix === 'pm'){
                        cUserFrom = 12
                    }
                    else if(currentUserArray[j].from_num === 12 && currentUserArray[j].from_suffix === 'am'){
                        cUserFrom = 24
                    }
                    else if(currentUserArray[j].from_suffix === 'am'){
                        cUserFrom = currentUserArray[j].from_num
                    }
                    else if(currentUserArray[j].from_suffix === 'pm'){
                        cUserFrom = currentUserArray[j].from_num + 12
                    }
                    //console.log('Current Users Time from adjusted ', cUserFrom)
                    if(currentUserArray[j].to_num === 12 && currentUserArray[j].to_suffix === 'pm'){
                        cUserTo = 12
                    }
                    else if(currentUserArray[j].to_num === 12 && currentUserArray[j].to_suffix === 'am'){
                        cUserTo = 24
                    }
                    else if(currentUserArray[j].to_suffix === 'am'){
                        cUserTo = currentUserArray[j].to_num
                    }
                    else if(currentUserArray[j].to_suffix === 'pm'){
                        cUserTo = currentUserArray[j].to_num + 12
                    }
                    //console.log('Current Users Time To Adjusted', cUserTo)
                    if((cUserFrom < toTime) && (cUserTo > fromTime)){
                        //console.log("Match found with current user and user id" , this.props.availabilityArray[i].user_id )
                        if(this.props.currentUserMatches.indexOf(this.props.availabilityArray[i].user_id) === -1 ){
                                addMatch(this.props.availabilityArray[i].user_id )
                        }
                        // this.setState({
                        //     matchIDs : [...this.state.matchIDs , this.props.availabilityArray[i].user_id ]
                        // })
                    }
                }
            }
      }}
  }
  renderMatches(){
    if(this.props.dbUsers.users) {
        return (
            this.props.dbUsers.users.map(user=>(
            <div style={ this.props.currentUserMatches.indexOf(user.id) === -1 ? styles.displayNone : styles.matchBox } key={Math.random()}>
                <div style={styles.matchAvatar}><img style={styles.matchImage} src={user.avatar} alt="no error"/></div>
                <div style={styles.matchLine}>{user.fname} {user.lname}</div>
                <div style={styles.matchLine}><a  href={"mailto:" + user.email}>{user.email}</a></div>
            </div>
		))
        )
    }else {
        return (
            <span> No Matches with other users at this time. </span>
        )
    }
  }
  render() {
      this.handleMatches()
      //console.log('this.state', this.state)
    return (
      <div style={styles.matchesContainer}>
        { this.renderMatches() }
      </div>
    )
  }
}

function mapStateToProps(appState){
	return { dbUsers: appState.dbUsers, currentUserMatches: appState.currentUserMatches }
}

export default connect(mapStateToProps)(UserMatches)