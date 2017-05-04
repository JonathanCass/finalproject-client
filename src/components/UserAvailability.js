import React from 'react'
import styles from './User.styles.js'
import UserAvailabilityGrid from './UserAvailabilityGrid'

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
          area: this.state.area,
          day: this.state.day,
          from: this.state.from +" "+ this.state.fromAmPm ,
          to: this.state.to +" "+ this.state.toAmPm 
      }
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
  render() {
    return (
        <div style={styles.AvailabilityContainer}>
        <div style={styles.availabilityHeader}>User Availability Settings</div>
        <div style={styles.bottom}>

        <div style={styles.left}>
            <select name="area" style={styles.select} onChange={this.handleChange} value={this.state.area}>
                <option value="">Select Area of City</option>
                <option value="Northwest Las Vegas">Northwest Las Vegas</option>
                <option value="Southwest Las Vegas">Southwest Las Vegas</option>
                <option value="Northeast Las Vegas">Northeast Las Vegas</option>
                <option value="Southeast Las Vegas">Southeast Las Vegas</option>
                <option value="Surrounding Area">Surrounding Area</option>
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
      
      <UserAvailabilityGrid availabilityArray={[...this.state.availabilityArray]}/>

      </div>
    )
  }
}

export default UserAvailability