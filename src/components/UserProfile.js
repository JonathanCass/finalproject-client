import React from 'react'
import styles from './User.styles.js'
import UserAvailability from './UserAvailability'
import {connect} from 'react-redux'

class User extends React.Component {
  constructor() {
    super()
    this.state = {
      avatarUrl:'',firstName:'',lastName:'',privacy:'',bio:'',hobbies:'',interests:'Movies, Books, Games, Music',email:'',activities:[],age:'',address:'',password:''
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    console.log('UserProfile this.props', this.props)
    return (
      <div style={styles.UserContainer}>
        
        <div style={styles.top}>
          
          <div style={styles.left}>
            <div style={styles.avatar} ></div>
            <button style={styles.editInfo2}>Edit</button><input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} style={styles.lineInput} value={this.state.firstName}></input>
            <button style={styles.editInfo2}>Edit</button><input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} style={styles.lineInput} value={this.state.lastName}></input>
            <button style={styles.editInfo2}>Edit</button><input type="text" name="avatarUrl" placeholder="Avatar Url" onChange={this.handleChange} style={styles.lineInput} value={this.state.avatarUrl}></input>
            <button style={styles.editInfo2}>Edit</button><input type="email" name="email" placeholder="Email" onChange={this.handleChange} style={styles.lineInput} value={this.state.email}></input>  
            <button style={styles.editInfo2}>Edit</button><input type="text" name="address" placeholder="Address" onChange={this.handleChange} style={styles.lineInput} value={this.state.address}></input>
            <button style={styles.editInfo2}>Edit</button><input type="password" name="password" placeholder="Password" onChange={this.handleChange} style={styles.lineInput} value={this.state.password}></input>
           </div>
           
           <div style={styles.right}>
            <div style={styles.activities}>
              <textarea style={styles.activitiesTextArea} name="activities" onChange={this.handleChange} value={this.state.activities}></textarea>
              <div style={styles.buttonBar}><span>User's Activities Info</span><button style={styles.editInfo}>Edit</button></div>
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
	return { user: appState.users}
}

export default connect(mapStateToProps)(User)