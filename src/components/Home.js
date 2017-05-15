import React from 'react'
import '../assets/home.css'
import AutoCarousel from './Carousel'
import 'font-awesome/css/font-awesome.css'
import {getUsers} from '../api/messaging'
// import {getEvents} from '../api/messaging'
import { Link } from 'react-router-dom'
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
    width: 1300,
  },
  images: {
    height:'800px',
    width:'1300px',
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
  // getEvents()
}
  render() {
    return (
      <div style={styles.homeContainer} className="beginningContainer">
        <section style={styles.carousel} className="carouselContainer">
          <AutoCarousel slidesToShow={1}  dragging={true} autoTime={6000}>
              <img alt='' src={require('../assets/images/volleyball.jpg')} style={styles.images}/>
              <img alt='' src={require('../assets/images/basketball.jpeg')} style={styles.images}/>
              <img alt='' src={require('../assets/images/running.jpg')} style={styles.images}/>
              <img alt='' src={require('../assets/images/bike.jpeg')} style={styles.images}/>
              <img alt='' src="https://images.pexels.com/photos/798/bench-people-smartphone-sun.jpg?w=940&amp;h=650&amp;auto=compress&amp;cs=tinysrgb"/>    
          </AutoCarousel>  
        </section>
      
       <h1 className="happening">Your Matches</h1>

          <ul className="matches">     
            <Link to={'/UserProfile/'}><li id="person" name='match'>
              <img alt='matched' style={styles.matchImg} src={this.props.dbUsers.users && this.props.dbUsers.users[20].avatar}/>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[20].fname}</p>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[20].lname}</p>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[20].interests}</p>
            </li></Link>

            <Link to={'UserProfile/'}><li id="person" name='match'>
              <img alt='matched' style={styles.matchImg} src={this.props.dbUsers.users && this.props.dbUsers.users[4].avatar}/>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[4].fname}</p>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[4].lname}</p>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[4].interests}</p>
            </li></Link>

            <Link to={'/UserProfile/'}><li id="person" name='match'>
              <img alt='matched' style={styles.matchImg} src={this.props.dbUsers.users && this.props.dbUsers.users[7].avatar}/>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[7].fname}</p>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[7].lname}</p>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[7].interests}</p>
            </li></Link>

            <Link to={'/UserProfile/'}><li id="person" name='match'>
              <img alt='matched' style={styles.matchImg} src={this.props.dbUsers.users && this.props.dbUsers.users[12].avatar}/>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[12].fname}</p>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[12].lname}</p>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[12].interests}</p>
            </li></Link>
          </ul>
      </div> //end of container
    )
  }
}

function mapStateToProps(appState){
	return {home: appState.home, dbUsers: appState.dbUsers, currentUserID : appState.currentUserId}
}

export default connect(mapStateToProps)(Home)