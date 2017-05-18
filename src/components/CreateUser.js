import React from 'react'
import styles from './User.styles.js'
import {addUser} from '../api/messaging'
import {changeUser} from '../api/messaging'

class User extends React.Component {
  constructor() {
    super()
    this.state = {
      avatarUrl:'http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-md.png',firstName:'',lastName:'',activities:'',bio:'',hobbies:'',interests:'Movies, Books, Games, Music',email:'',age:'',gender:'',privacy:'', username:'',password:''
    }
  }
  createUser = (e) => {
  	e.preventDefault()
      var userObj= {
        avatar: this.state.avatarUrl,
        fname: this.state.firstName,
        lname: this.state.lastName,
        activities_info: this.state.activities,
        bio: this.state.bio,
        hobbies: this.state.hobbies,
        interests: this.state.interests,
        email: this.state.email,
        age: this.state.age,
        gender: this.state.gender,
        username: this.state.username,
        privacy: this.state.privacy,
        password: this.state.password
      }
      // console.log(userObj)
      addUser(userObj)
      changeUser(22)
      this.props.history.push('/UserProfile/' + 22)
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div style={styles.UserContainer}>
        
        <div style={styles.top}>
          
          <div style={styles.left}>
            <div style={styles.avatar} ><img alt="no error" style={styles.avatar2} src={this.state.avatarUrl} /></div>
            <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} style={styles.lineInput2} value={this.state.firstName}></input>
            <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} style={styles.lineInput2} value={this.state.lastName}></input>
            <input type="text" name="avatarUrl" placeholder="Avatar Url" onChange={this.handleChange} style={styles.lineInput2} value={this.state.avatarUrl}></input>
            <input type="email" name="email" placeholder="Email" onChange={this.handleChange} style={styles.lineInput2} value={this.state.email}></input>   
            <input type="text" name="username" placeholder="Username" onChange={this.handleChange} style={styles.lineInput2} value={this.state.address}></input>
            <input type="password" name="password" placeholder="Password" onChange={this.handleChange} style={styles.lineInput2} value={this.state.password}></input>
           </div>
           
           <div style={styles.right}>
            <div style={styles.activities}>
              <textarea style={styles.activitiesTextArea} name="activities" onChange={this.handleChange} value={this.state.activities}></textarea>
              <div style={styles.buttonBar}><span style={styles.font}>User's Activities Info</span></div>
            </div>
            <div style={styles.infoBlock}>
              <textarea style={styles.textArea} name="bio" onChange={this.handleChange} value={this.state.bio}></textarea>
              <div style={styles.buttonBar}><span style={styles.font}>User's Bio</span></div>
            </div>
            <div style={styles.infoBlock}>
              <textarea style={styles.textArea} name="hobbies" onChange={this.handleChange} value={this.state.hobbies}></textarea>
              <div style={styles.buttonBar}><span style={styles.font}>Hobbies</span></div>
            </div>
            <div style={styles.infoBlock}>
              <textarea style={styles.textArea} name="interests" onChange={this.handleChange} value={this.state.interests}></textarea>
              <div style={styles.buttonBar}><span style={styles.font}>Interests</span></div>
            </div>
            <input type="text" name="age" placeholder="Age" onChange={this.handleChange} style={styles.ageInput} value={this.state.age}></input>
            <select name="gender" style={styles.gender} onChange={this.handleChange} value={this.state.gender}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <select name="privacy" style={styles.privacy2} onChange={this.handleChange} value={this.state.privacy}>
              <option value="">Privacy Setting</option>
              <option value="private">Private</option>
              <option value="friends">Friends Only</option>
              <option value="public">Public</option>
            </select>
            <button style={styles.createUser} onClick={this.createUser}>Create User</button>
           </div>

        </div>
        <img style={styles.bigPicture} src={require("../assets/pathSquare.jpg")} alt="no error"/>
      </div>
    )
  }
}

export default User