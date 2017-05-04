import React from 'react'
import '../assets/home.css'
import Carousel from 'nuka-carousel'
import 'font-awesome/css/font-awesome.css'
import {Link} from 'react-router-dom'
import {getContacts} from '../api/messaging'
import {connect} from 'react-redux'


class Home extends React.Component {
  constructor(props) { 
    super(props)
      this.state = {
      login:''
   }
}
handleSubmit = (e) => {  // FINISH HANDLE FUNCTIONS
  e.preventDefault()
}
handleClick = (e) => {
  e.preventDefault()
  console.log('click')
}
handleChange = (e) => {
  this.setState({
    [e.target.name]:e.target.value
  })
}
componentWillMount(){
  	getContacts()
}
  render() {
    return (
      <div className="beginningContainer">
        <section className="carouselContainer">
          <Carousel style={{height:380}}>
              <img alt='' src="https://static.pexels.com/photos/305244/pexels-photo-305244.jpeg"/>
              <img alt='' src="https://static.pexels.com/photos/24306/pexels-photo-24306.jpg"/>
              <img alt='' src="https://static.pexels.com/photos/386024/pexels-photo-386024.jpeg"/>
              <img alt='' src="https://images.pexels.com/photos/798/bench-people-smartphone-sun.jpg?w=940&amp;h=650&amp;auto=compress&amp;cs=tinysrgb"/>
              <img alt='' src="http://latina.lu/wp-content/uploads/2017/04/tenis-003.jpg"/>
          </Carousel>  
       </section>
      
       <h1 className="happening">What's Happening In Your Area</h1>
          <ul className="matches">
            {/*<li id="person"></li> <img alt={data.name.first} src={data.picture.thumbnail}/>{data.activities}*/}
            <li id="person">Match</li>
            <li id="person">Match</li>
            <li id="person">Match</li>
            <li id="person">Match</li>
          </ul>
          {/*{this.state.dataname}*/}
      </div> //end of container
    )
  }
}

function mapStateToProps(appState){
	return {}
}

export default connect(mapStateToProps)(Home)