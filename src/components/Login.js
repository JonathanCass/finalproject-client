import React from 'react'
import { getUsers } from '../api/messaging'
import { connect } from 'react-redux'
//import style from '../assets/login.css'



class Login extends React.Component {
  constructor(props) {
    super(props);
       this.state = {
            username:'', 
            password:''
        }
    }
 
 login(){
       this.setState({
          username:this.state.username, 
          password:this.state.password
       })
    }

 loginPrompt = (e) =>{
    e.preventDefault()
    this.login()
        if(this.props.dbUsers.users) {
            return (this.props.dbUsers.users.map(user=>{
                if(user.username === this.state.username && user.password === this.state.password){
                    alert("Hello, " + user.username + " you are logged In")
                    this.props.history.push('/UserHomePage/')
                }             
            }))
         }
     }

     handleChange = (e) => {
        this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentWillMount(){
       getUsers()
  }
  render() {
    console.log(this.state.username)
     console.log(this.state.password)
     console.log(this.props.dbUsers)

    return (
      <div>
          <form>
              <input type="text" name="username" placeholder="User Name" onChange={this.handleChange} value={this.state.username}/>
               <input type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
               <button onClick={this.loginPrompt} type="submit" name="submitLogin">Submit</button>
          </form>
      </div>
    );
  }
}

function mapStateToProps(appState){
    return { dbUsers: appState.dbUsers}
}

export default connect(mapStateToProps)(Login)