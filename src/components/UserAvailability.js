import React from 'react'
import styles from './User.styles.js'
import UserAvailabilityGrid from './UserAvailabilityGrid'
import {connect} from 'react-redux'
import {postAvailability} from '../api/messaging'
import {getAvail} from '../api/messaging'

class UserAvailability extends React.Component {
    constructor() {
        super()
        this.state = {
            area:'',day:'',from:0,to:0,fromAmPm:'',toAmPm:'',availabilityArray:[]
    }
  }
  addAvailability = (e) => {
  	e.preventDefault()
      var availabilityObj ={
          quadrant: this.state.area,
          day_of_week: this.state.day,
          from_num: this.state.from,
          from_suffix: this.state.fromAmPm ,
          to_num: this.state.to,
          to_suffix: this.state.toAmPm,
          user_id: this.props.currentUserID,
      }
      postAvailability(availabilityObj)
      console.log('avail', availabilityObj)
    this.setState({
      availabilityArray : [...this.state.availabilityArray, availabilityObj],
      area:'',day:'',from:0,to:0,fromAmPm:'',toAmPm:''
    })
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  componentWillMount(){
  	getAvail()
  }
  render() {
    return (
        <div style={styles.AvailabilityContainer}>
        <div style={ Number(this.props.userid) === Number(this.props.currentUserID) ? styles.displayNormal : styles.displayNone} >
        <div style={styles.availabilityHeader}>User Availability Settings</div>
        <div style={styles.bottom}>

        <div style={styles.left}>
            <select name="area" style={styles.select} onChange={this.handleChange} value={this.state.area}>
                <option value="">Select Area of City</option>
                <option value="northwest">Northwest Las Vegas</option>
                <option value="southwest">Southwest Las Vegas</option>
                <option value="northeast">Northeast Las Vegas</option>
                <option value="southeast">Southeast Las Vegas</option>
                <option value="surrounding">Surrounding Area</option>
            </select>
            <select name="day" style={styles.select} onChange={this.handleChange} value={this.state.day}>
                <option value="">Select day of week</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
            </select>
        </div>

        <div style={styles.right}>
            <div style={styles.timeLabel}>From</div>
            <select name="from" style={styles.time} onChange={this.handleChange} value={this.state.from}>
                <option value={0}></option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
            </select>
            <select name="fromAmPm" style={styles.AmPm} onChange={this.handleChange} value={this.state.fromAmPm}>
                <option value="">AM/PM</option>
                <option value="AM">AM</option>
                <option value="PM">PM</option>
            </select>
            <div style={styles.timeLabel}>To</div>
            <select name="to" style={styles.time} onChange={this.handleChange} value={this.state.to}>
                <option value={0}></option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
            </select>
            <select name="toAmPm" style={styles.AmPm} onChange={this.handleChange} value={this.state.toAmPm}>
                <option value="">AM/PM</option>
                <option value="AM">AM</option>
                <option value="PM">PM</option>
            </select>
        </div>
        
      </div>
      <button style={styles.addAvailability} onClick={this.addAvailability}>Add to User Availability</button>
      
      </div>

      <UserAvailabilityGrid availabilityArray={this.props.dbAvail.availability}/>

      </div>
    )
  }
}

function mapStateToProps(appState){
	return { currentUserID : appState.currentUserId, dbAvail : appState.dbAvail}
}

export default connect(mapStateToProps)(UserAvailability)