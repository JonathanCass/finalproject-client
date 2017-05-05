import React from 'react'
import styles from './User.styles.js'
import UserAvailability from './UserAvailability'
import {connect} from 'react-redux'
import {getUsers} from '../api/messaging'

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
    console.log('e.target.name', e.target.name)
    this.setState({
      [e.target.name]: !this.state[e.target.name]
    })
  }
  componentWillMount(){
  	getUsers()
  }
  render() {
    console.log('UserProfile this.props', this.props)
    console.log('this.props.dbUsers.users and this.props.dbUsers.users[this.props.currentUserID].fname', this.props.dbUsers.users && this.props.dbUsers.users[this.props.currentUserID].fname)
    return (
      <div style={styles.UserContainer}>
        
        <div style={styles.top}>
          
          <div style={styles.left}>
            <div style={styles.avatar} ></div>
            <button style={styles.editInfo2} onClick={this.handleEdit} name="editFirstName">Edit</button><div style={this.state.editFirstName ?  styles.displayNone : styles.lineDisplay } >{this.props.dbUsers.users && this.props.dbUsers.users[this.props.currentUserID].fname}</div><input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} style={this.state.editFirstName ? styles.lineInput : styles.displayNone} value={this.state.firstName}></input>
            <button style={styles.editInfo2} onClick={this.handleEdit} name="editLastName">Edit</button><div style={this.state.editLastName ?  styles.displayNone : styles.lineDisplay } >{this.props.dbUsers.users && this.props.dbUsers.users[this.props.currentUserID].lname}</div><input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} style={this.state.editLastName ? styles.lineInput : styles.displayNone} value={this.state.lastName}></input>           
            <button style={styles.editInfo2} onClick={this.handleEdit} name="editAvatarUrl">Edit</button><div style={this.state.editAvatarUrl ?  styles.displayNone : styles.lineDisplay } >{this.props.dbUsers.users && this.props.dbUsers.users[this.props.currentUserID].avatar}</div><input type="text" name="avatarUrl" placeholder="Avatar Url" onChange={this.handleChange} style={this.state.editAvatarUrl ? styles.lineInput : styles.displayNone} value={this.state.avatarUrl}></input>
            <button style={styles.editInfo2} onClick={this.handleEdit} name="editEmail">Edit</button><div style={this.state.editEmail ?  styles.displayNone : styles.lineDisplay } >{this.props.dbUsers.users && this.props.dbUsers.users[this.props.currentUserID].email}</div><input type="text" name="avatarUrl" placeholder="Avatar Url" onChange={this.handleChange} style={this.state.editEmail ? styles.lineInput : styles.displayNone} value={this.state.email}></input>  
            <button style={styles.editInfo2}>Edit</button><input type="text" name="address" placeholder="Address" onChange={this.handleChange} style={styles.lineInput} value={this.state.address}></input>
            <button style={styles.editInfo2}>Edit</button><input type="password" name="password" placeholder="Password" onChange={this.handleChange} style={styles.lineInput} value={this.state.password}></input>
           </div>
           
           <div style={styles.right}>
            <div style={styles.activities}>
              <div style={this.state.editActivites ? styles.displayNone : styles.activitiesDisplay}></div>
              <textarea style={this.state.editActivities ? styles.activitiesTextArea : styles.displayNone} name="activities" onChange={this.handleChange} value={this.state.activities}></textarea>
              <div style={styles.buttonBar}><span>User's Activities Info</span><button name="editActivities" onClick={this.handleEdit} style={styles.editInfo}>Edit</button></div>
            </div>
            <div style={styles.infoBlock}>
              <textarea style={styles.textArea} name="bio" onChange={this.handleChange} value={this.state.bio}></textarea>
              <div style={styles.buttonBar}><span>User's Bio</span><button style={styles.editInfo}>Edit</button></div>
            </div>
            <div style={styles.infoBlock}>
              <textarea style={styles.textArea} name="hobbies" onChange={this.handleChange} value={this.state.hobbies}></textarea>
              <div style={styles.buttonBar}><span>Hobbies</span><button style={styles.editInfo}>Edit</button></div>
            </div>
            <div style={styles.infoBlock}>
              <textarea style={styles.textArea} name="interests" onChange={this.handleChange} value={this.state.interests}></textarea>
              <div style={styles.buttonBar}><span>Interests</span><button style={styles.editInfo}>Edit</button></div>
            </div>
            <input type="text" name="age" placeholder="Age" onChange={this.handleChange} style={styles.ageInput} value={this.state.age}></input>
            <select name="gender" style={styles.gender} onChange={this.handleChange} value={this.state.gender}>
              <option value="">Select Gender</option>
              <option value="private">Male</option>
              <option value="friends">Female</option>
            </select>
            <select name="privacy" style={styles.privacy} onChange={this.handleChange} value={this.state.privacy}>
              <option value="">User Page Privacy Setting</option>
              <option value="private">Private</option>
              <option value="friends">Friends Only</option>
              <option value="public">Public</option>
            </select>
           </div>

        </div>
        <UserAvailability/>
      </div>
    )
  }
}

function mapStateToProps(appState){
	return { dbUsers: appState.dbUsers, currentUserID : appState.currentUserId}
}

export default connect(mapStateToProps)(User)