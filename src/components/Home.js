import React from 'react'
import '../assets/home.css'
import Carousel from 'nuka-carousel'
import 'font-awesome/css/font-awesome.css'
// import {Link} from 'react-router-dom'
import {getUsers} from '../api/messaging'
import {connect} from 'react-redux'

const styles = { // avatar match styles
  matchImg : {
    height:'100px',
    width:'100px',
    marginTop:'10px'
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
  },
  bball: {
    height:'600px',
    width:'900px',
    marginTop:'-16%'
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
              <img alt='' src={require('../assets/images/basketball.jpeg')} style={styles.bball}/>
              <img alt='' src={require('../assets/images/running.jpg')} style={styles.bball}/>
              <img alt='' src={require('../assets/images/bike.jpeg')}/>
              <img alt='' src="https://images.pexels.com/photos/798/bench-people-smartphone-sun.jpg?w=940&amp;h=650&amp;auto=compress&amp;cs=tinysrgb"/>
              <img alt='' src={require('../assets/images/volleyball.jpg')} style={styles.volleyball}/>
          </Carousel>  
       </section>
      
       <h1 className="happening">What's Happening In Your Area</h1>

          <ul className="matches">     
            <li id="person" name='match'>
              <img alt='matched' style={styles.matchImg} src={this.props.dbUsers.users && this.props.dbUsers.users[this.props.currentUserID].avatar}/>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[this.props.currentUserID].fname}</p>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[this.props.currentUserID].activities_info}</p>
            </li>

            <li id="person" name='match'>
              <img alt='matched' style={styles.matchImg} src={this.props.dbUsers.users && this.props.dbUsers.users[this.props.currentUserID].avatar}/>
                {/*<p>{this.props.dbUsers.users && this.props.dbUsers.users[this.props.currentID].fname}</p>
                <p>{this.props.dbUsers.users && this.props.dbUsers.users[this.props.currentID].lname}</p>
                <p>{this.props.dbUsers.users && this.props.dbUsers.users[this.props.currentID].interests}</p>*/}
            </li>

            <li id="person" name='match'>
              <img alt='matched' style={styles.matchImg} src={this.props.dbUsers.users && this.props.dbUsers.users[this.props.currentUserID].avatar}/>
                {/*<p>{this.props.dbUsers.users && this.props.dbUsers.users[this.props.currentID].fname}</p>
                <p>{this.props.dbUsers.users && this.props.dbUsers.users[this.props.currentID].lname}</p>
                <p>{this.props.dbUsers.users && this.props.dbUsers.users[this.props.currentID].interests}</p>*/}
            </li>

            <li id="person" name='match'>
              <img alt='matched' style={styles.matchImg} src={this.props.dbUsers.users && this.props.dbUsers.users[this.props.currentUserID].avatar}/>
                {/*<p>{this.props.dbUsers.users && this.props.dbUsers.users[this.props.currentID].fname}</p>
                <p>{this.props.dbUsers.users && this.props.dbUsers.users[this.props.currentID].lname}</p>
                <p>{this.props.dbUsers.users && this.props.dbUsers.users[this.props.currentID].interests}</p>*/}
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