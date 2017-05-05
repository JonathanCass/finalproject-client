import React from 'react'
import styles from './User.styles.js'
import {addUser} from '../api/messaging'

class User extends React.Component {
  constructor() {
    super()
    this.state = {
      avatarUrl:'',firstName:'',lastName:'',activities:'',bio:'',hobbies:'',interests:'Movies, Books, Games, Music',email:'',age:'',gender:'',privacy:'', address:'',password:''
    }
  }
  createUser = (e) => {
  	e.preventDefault()
      var profileObj= {
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
        address: this.state.address,
        privacy: this.state.privacy,
        password: this.state.password
      }
      console.log('profileObj', profileObj)
      addUser(profileObj)
      this.props.history.push('/UserProfile/')
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
            <div style={styles.avatar} ></div>
            <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} style={styles.lineInput2} value={this.state.firstName}></input>
            <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} style={styles.lineInput2} value={this.state.lastName}></input>
            <input type="text" name="avatarUrl" placeholder="Avatar Url" onChange={this.handleChange} style={styles.lineInput2} value={this.state.avatarUrl}></input>
            <input type="email" name="email" placeholder="Email" onChange={this.handleChange} style={styles.lineInput2} value={this.state.email}></input>   
            <input type="text" name="address" placeholder="Address" onChange={this.handleChange} style={styles.lineInput2} value={this.state.address}></input>
            <input type="password" name="password" placeholder="Password" onChange={this.handleChange} style={styles.lineInput2} value={this.state.password}></input>
           </div>
           
           <div style={styles.right}>
            <div style={styles.activities}>
              <textarea style={styles.activitiesTextArea} name="activities" onChange={this.handleChange} value={this.state.activities}></textarea>
              <div style={styles.buttonBar}><span>User's Activities Info</span></div>
            </div>
            <div style={styles.infoBlock}>
              <textarea style={styles.textArea} name="bio" onChange={this.handleChange} value={this.state.bio}></textarea>
              <div style={styles.buttonBar}><span>User's Bio</span></div>
            </div>
            <div style={styles.infoBlock}>
              <textarea style={styles.textArea} name="hobbies" onChange={this.handleChange} value={this.state.hobbies}></textarea>
              <div style={styles.buttonBar}><span>Hobbies</span></div>
            </div>
            <div style={styles.infoBlock}>
              <textarea style={styles.textArea} name="interests" onChange={this.handleChange} value={this.state.interests}></textarea>
              <div style={styles.buttonBar}><span>Interests</span></div>
            </div>
            <input type="text" name="age" placeholder="Age" onChange={this.handleChange} style={styles.ageInput} value={this.state.age}></input>
            <select name="gender" style={styles.gender} onChange={this.handleChange} value={this.state.gender}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <select name="privacy" style={styles.privacy2} onChange={this.handleChange} value={this.state.privacy}>
              <option value="">Privacy Setting</option>
              <option value={1}>Private</option>
              <option value={2}>Friends Only</option>
              <option value={3}>Public</option>
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