import React from 'react'
import '../assets/home.css'
import Carousel from 'nuka-carousel'
import 'font-awesome/css/font-awesome.css'
// import {Link} from 'react-router-dom'
// import {getUsers} from '../api/messaging'
import {connect} from 'react-redux'

class Home extends React.Component {
  constructor() { 
    super()
      this.state = {
      login:'',
      match:''
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
// componentWillMount(){
//     store.dispatch(() => {
//       const appState = store.getState()
//       this.setState({
        
//       })
//     })
//   	getContacts()
// }
  render() {
    console.log('Home', this.props)
    return (
      <div className="beginningContainer">
        <section className="carouselContainer">
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
          <ul className="matches" value={this.state.match}>
            {/*<li id="person" name='match'>{data.avatar}{data.fname}{data.lname}{data.activitiesInfo}</li>*/}
            <li id="person" name='match'>User Match</li>
            <li id="person" name='match'>User Match</li>
            <li id="person" name='match'>User Match</li>
            <li id="person" name='match'>User Match</li>
          </ul>
      </div> //end of container
    )
  }
}

function mapStateToProps(appState){
	return {home: appState.home}
}

export default connect(mapStateToProps)(Home)