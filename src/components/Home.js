import React from 'react'
import '../assets/home.css'
import Carousel from 'nuka-carousel'
import 'font-awesome/css/font-awesome.css'
// import {Link} from 'react-router-dom'
import {getUsers} from '../api/messaging'
import {connect} from 'react-redux'

const styles = { // avatar match styles
  matchImg : {
    height:'120px',
    width:'120px',
    marginTop:'10px',
    borderRadius: 5,
  },
  p : {
    border:'1px',
    height:'10px',
    fontFamily:'Verdana',
    color:'white'
  }, 
  homeContainer:{
    background: 'linear-gradient( to bottom , #FFD200 , #F7971E )',
    width: 1300,
    border: 'solid 2px black',
    borderRadius: 5
  },
  carousel:{
    border: 'solid 2px black',
    borderRadius: 5
  }
}

class Home extends React.Component {
  constructor() { 
    super()
      this.state = {
      // match:''
   }
}
handleSubmit = (e) => {  // FINISH HANDLE FUNCTIONS
  e.preventDefault()
}
handleClick = (e) => {
  e.preventDefault()
}
handleChange = (e) => {
  this.setState({
    [e.target.name]:e.target.value
  })
}
componentWillMount() {
  getUsers()
}
  render() {
    return (
      <div style={styles.homeContainer} className="beginningContainer">
        <section style={styles.carousel} className="carouselContainer">
          <Carousel>
              <img alt='' src="https://static.pexels.com/photos/305244/pexels-photo-305244.jpeg"/>
              {/*<p id="texts">Find a Running Buddy</p>*/}
              <img alt='' src="https://static.pexels.com/photos/24306/pexels-photo-24306.jpg"/>
              <img alt='' src="https://static.pexels.com/photos/386024/pexels-photo-386024.jpeg"/>
              <img alt='' src="https://images.pexels.com/photos/798/bench-people-smartphone-sun.jpg?w=940&amp;h=650&amp;auto=compress&amp;cs=tinysrgb"/>
              <img alt='' src="http://latina.lu/wp-content/uploads/2017/04/tenis-003.jpg"/>
          </Carousel>  
       </section>
      
       <h1 className="happening">What's Happening In Your Area</h1>

          <ul className="matches">     
            <li id="person" name='match'>
              <img alt='matched' style={styles.matchImg} src={this.props.dbUsers.users && this.props.dbUsers.users[this.props.currentUserID].avatar}/>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[this.props.currentUserID].fname}</p>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[this.props.currentUserID].lname}</p> 
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[this.props.currentUserID].bio}</p>
            </li>

            <li id="person" name='match'>
              <img alt='matched' style={styles.matchImg} src={this.props.dbUsers.users && this.props.dbUsers.users[4].avatar}/>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[4].fname}</p>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[4].lname}</p>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[4].interests}</p>
            </li>

            <li id="person" name='match'>
              <img alt='matched' style={styles.matchImg} src={this.props.dbUsers.users && this.props.dbUsers.users[7].avatar}/>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[7].fname}</p>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[7].lname}</p>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[7].interests}</p>
            </li>

            <li id="person" name='match'>
              <img alt='matched' style={styles.matchImg} src={this.props.dbUsers.users && this.props.dbUsers.users[12].avatar}/>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[12].fname}</p>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[12].lname}</p>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[12].interests}</p>
            </li>
          </ul>
      </div> //end of container
    )
  }
}

function mapStateToProps(appState){
	return {home: appState.home, dbUsers: appState.dbUsers, currentUserID : appState.currentUserId}
}

export default connect(mapStateToProps)(Home)