import React from 'react'
import styles from './User.styles.js'
import UserAvailability from './UserAvailability'
import {connect} from 'react-redux'
import {getUsers} from '../api/messaging'
import {getFriends} from '../api/messaging'

class User extends React.Component {
  constructor() {
    super()
    this.state = {
      avatarUrl:'',firstName: '' ,lastName:'',privacy:'',bio:'',hobbies:'',interests:'Movies, Books, Games, Music',email:'',activities:'',age:'',address:'',password:'',
      editAvatarUrl: '', editFirstName: false, editLastName: false, editBio: false, editActivities: false, editHobbies: false, editInterests: false, editEmail: false, editAddress: false, editPassword: false
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleEdit = (e) => {
    this.setState({
      [e.target.name]: !this.state[e.target.name]
    })
  }

  componentWillMount(){
  	getUsers()
    getFriends()
    
   
  }
  
  render() {
      //console.log('this.props.friends')
    return (
      
      <div style={styles.UserContainer}>

        <div style={styles.top}>
          
          <div style={styles.left}>

            <div style={styles.avatar} ><img alt="no error" style={styles.avatar2} src={this.props.dbUsers.users && this.props.dbUsers.users[this.props.match.params.userid].avatar} /></div>
            <button style={Number(this.props.match.params.userid) === Number(this.props.currentUserID) ? styles.editInfo2 : styles.displayNone } onClick={this.handleEdit} name="editFirstName">Edit</button><div style={this.state.editFirstName ?  styles.displayNone : styles.lineDisplay } >{this.props.dbUsers.users && this.props.dbUsers.users[this.props.match.params.userid].fname}</div><input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} style={this.state.editFirstName ? styles.lineInput : styles.displayNone} value={this.state.firstName}></input>
            <button style={Number(this.props.match.params.userid) === Number(this.props.currentUserID) ? styles.editInfo2 : styles.displayNone } onClick={this.handleEdit} name="editLastName">Edit</button><div style={this.state.editLastName ?  styles.displayNone : styles.lineDisplay } >{this.props.dbUsers.users && this.props.dbUsers.users[this.props.match.params.userid].lname}</div><input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} style={this.state.editLastName ? styles.lineInput : styles.displayNone} value={this.state.lastName}></input>           
            <button style={Number(this.props.match.params.userid) === Number(this.props.currentUserID) ? styles.editInfo2 : styles.displayNone } onClick={this.handleEdit} name="editAvatarUrl">Edit</button><div style={this.state.editAvatarUrl ?  styles.displayNone : styles.lineDisplay } >{this.props.dbUsers.users && this.props.dbUsers.users[this.props.match.params.userid].avatar}</div><input type="text" name="avatarUrl" placeholder="Avatar Url" onChange={this.handleChange} style={this.state.editAvatarUrl ? styles.lineInput : styles.displayNone} value={this.state.avatarUrl}></input>
            <button style={Number(this.props.match.params.userid) === Number(this.props.currentUserID) ? styles.editInfo2 : styles.displayNone } onClick={this.handleEdit} name="editEmail">Edit</button><div style={this.state.editEmail ?  styles.displayNone : styles.lineDisplay } ><a style={styles.anchor} href={"mailto:" + (this.props.dbUsers.users && this.props.dbUsers.users[this.props.match.params.userid].email)}>{this.props.dbUsers.users && this.props.dbUsers.users[this.props.match.params.userid].email}</a></div><input type="text" name="avatarUrl" placeholder="Avatar Url" onChange={this.handleChange} style={this.state.editEmail ? styles.lineInput : styles.displayNone} value={this.state.email}></input>  
            <button style={Number(this.props.match.params.userid) === Number(this.props.currentUserID) ? styles.editInfo2 : styles.displayNone }>Edit</button><input type="text" name="address" placeholder="Address" onChange={this.handleChange} style={styles.lineInput} value={this.state.address}></input>
            <button style={Number(this.props.match.params.userid) === Number(this.props.currentUserID) ? styles.editInfo2 : styles.displayNone }>Edit</button><input type="password" name="password" placeholder="Password" onChange={this.handleChange} style={styles.lineInput} value={this.state.password}></input>
           </div>
           
           <div style={styles.right}>
            <div style={styles.activities}>
              <div style={this.state.editActivities ? styles.displayNone : styles.activitiesDisplay}>{this.props.dbUsers.users && this.props.dbUsers.users[this.props.match.params.userid].activities_info}</div>
              <textarea style={this.state.editActivities ? styles.activitiesTextArea : styles.displayNone} name="activities" onChange={this.handleChange} value={this.state.activities}></textarea>
              <div style={styles.buttonBar}><span>User's Activities Info</span><button name="editActivities" onClick={this.handleEdit} style={Number(this.props.match.params.userid) === Number(this.props.currentUserID) ? styles.editInfo : styles.displayNone }>Edit</button></div>
            </div>
            <div style={styles.infoBlock}>
              <div style={this.state.editBio ? styles.displayNone : styles.textDisplay}>{this.props.dbUsers.users && this.props.dbUsers.users[this.props.match.params.userid].bio}</div>
              <textarea style={this.state.editBio ? styles.textArea : styles.displayNone} name="bio" onChange={this.handleChange} value={this.state.bio}></textarea>
              <div style={styles.buttonBar}><span>User's Bio</span><button name='editBio' onClick={this.handleEdit} style={Number(this.props.match.params.userid) === Number(this.props.currentUserID) ? styles.editInfo : styles.displayNone }>Edit</button></div>
            </div>
            <div style={styles.infoBlock}>
              <div style={this.state.editHobbies ? styles.displayNone : styles.textDisplay}>{this.props.dbUsers.users && this.props.dbUsers.users[this.props.match.params.userid].hobbies}</div>
              <textarea style={this.state.editHobbies ? styles.textArea : styles.displayNone} name="hobbies" onChange={this.handleChange} value={this.state.hobbies}></textarea>
              <div style={styles.buttonBar}><span>User's Hobbies</span><button name='editHobbies' onClick={this.handleEdit} style={Number(this.props.match.params.userid) === Number(this.props.currentUserID) ? styles.editInfo : styles.displayNone }>Edit</button></div>
            </div>
            <div style={styles.infoBlock}>
              <div style={this.state.editInterests ? styles.displayNone : styles.mediaDisplay}>{this.props.dbUsers.users && this.props.dbUsers.users[this.props.match.params.userid].interests}</div>
              <textarea style={this.state.editInterests ? styles.textArea : styles.displayNone} name="interests" onChange={this.handleChange} value={this.state.interests}></textarea>
              <div style={styles.buttonBar}><span>User's (Media) Interests</span><button name='editInterests' onClick={this.handleEdit} style={Number(this.props.match.params.userid) === Number(this.props.currentUserID) ? styles.editInfo : styles.displayNone }>Edit</button></div>
            </div>
            <div style={styles.ageDisplay}>Age : {this.props.dbUsers.users && this.props.dbUsers.users[this.props.match.params.userid].age}</div>
            <div style={styles.genderDisplay}>{this.props.dbUsers.users && this.props.dbUsers.users[this.props.match.params.userid].gender}</div>
            <div style={styles.privacyDisplay}>Privacy Setting :  {this.props.dbUsers.users && this.props.dbUsers.users[this.props.match.params.userid].privacy}</div>
           </div>

        </div>
        <UserAvailability userid={this.props.match.params.userid} dbUsers={this.props.dbUsers} />
      </div>
    )
  }
}

function mapStateToProps(appState){
	return { dbUsers: appState.dbUsers, currentUserID : appState.currentUserId, friends: appState.friends}
}

export default connect(mapStateToProps)(User)