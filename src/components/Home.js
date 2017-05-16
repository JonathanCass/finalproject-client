import React from 'react'
import '../assets/home.css'
import AutoCarousel from './Carousel'
import { Link } from 'react-router-dom'
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
    width: 1300,
  },
  images: {
    height:'800px',
    width:'1300px',
    marginTop:'-16%'
  }
}

class Home extends React.Component {
  constructor(props) { 
    super(props)
      this.state = {
      users:''
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
    // console.log('here', this.props.users)
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
      
       <h1 className="happening">What People In Your Area Are Up To</h1>
       
          <ul className="matches">
            {/*{this.props.dbUsers.users.map(user=>(
              <Link style={styles.link} to={'/UserProfile/' + user.id} >
                <img alt='matched' style={styles.matchImg} src={this.props.dbUsers.users && this.props.dbUsers.users[3].avatar}/>
              </Link>
            ))}*/}
              <Link to={'/UserProfile/' + this.props.cuserid}><li id="person" name='match'>
              <img alt='matched' style={styles.matchImg} src={this.props.dbUsers.users && this.props.dbUsers.users[16].avatar}/>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[16].fname}</p>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[16].lname}</p>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[16].activities_info}</p>
            </li></Link>
    
            <Link to={'/UserProfile/'}><li id="person" name='match'>
              <img alt='matched' style={styles.matchImg} src={this.props.dbUsers.users && this.props.dbUsers.users[4].avatar}/>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[4].fname}</p>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[4].lname}</p>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[4].activities_info}</p>
            </li></Link>

            <Link to={'/UserProfile/'}><li id="person" name='match'>
              <img alt='matched' style={styles.matchImg} src={this.props.dbUsers.users && this.props.dbUsers.users[7].avatar}/>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[7].fname}</p>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[7].lname}</p>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[7].activities_info}</p>
            </li></Link>

            <Link to={'/UserProfile/'}><li id="person" name='match'>
              <img alt='matched' style={styles.matchImg} src={this.props.dbUsers.users && this.props.dbUsers.users[14].avatar}/>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[14].fname}</p>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[14].lname}</p>
                <p style={styles.p}>{this.props.dbUsers.users && this.props.dbUsers.users[14].activities_info}</p>
            </li></Link>
          </ul>
      </div> //end of container
    )
  }
}

function mapStateToProps(appState){
	return {home: appState.home, dbUsers: appState.dbUsers, currentUserID : appState.currentUserId, users: appState.dbUsers.users}
}

export default connect(mapStateToProps)(Home)