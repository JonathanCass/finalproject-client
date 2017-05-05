import React from 'react'
import styles from './ParkView.styles'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DatePicker from 'material-ui/DatePicker'
import Table from './ParkViewTable'
import { connect } from 'react-redux'

class ParkView extends React.Component {
  constructor() {
   super()
   this.state = {
        id:'',
        play:'',
        level:'',
        activities:'',
        // date:'',
        notes:'',
        start:'',
        end:'',
        gear:'',
        activityArray:[]
   }
}
createActivity = (e) => {
  e.preventDefault()
  // alert('Your Activity Has Been Created')
  var createActivityObj ={
      play:this.state.play,
      level:this.state.level,
      activities:this.state.activities,
      // date:this.state.date,
      notes:this.state.notes,
      start:this.state.start,
      end:this.state.end,
      gear:this.state.gear
  }
  this.setState({
    activityArray : [...this.state.activityArray, createActivityObj],
    play:'', level:'', activities:'', notes:'', start:'', end:'', gear:''
  })
}
handleChange = (e) => {
  this.setState({
    [e.target.name]:e.target.value
  })
}
handleButton = (e) => {
  console.log(this.state)
  this.setState({
    [e.target.name]:e.target.value
  })
}
handleBrowse = (e) => {
  e.preventDefault()
  // console.log('Browse Activities')
}
  render() {
    // console.log('ParkView this.props', this.props)
    // console.log(this.state)
    return (
      <div style={styles.container}>    
          <h2 style={styles.h2}>Type Of Play</h2>
          <div style={styles.radioContainer}>
            <input type='radio' onChange={this.handleButton} name='play' value={this.state.play}/>
            <label htmlFor="competitive" style={styles.radio}>Competitive</label>
            <input type='radio'onChange={this.handleButton} name='play' value={this.state.play}/>
            <label htmlFor="leisurely" style={styles.radio}>Leisurely</label>
          <div className='line' style={styles.line}></div>
          </div>
          <div className='level'style={styles.level}>
            <input type='checkbox' onChange={this.handleButton} name='level' value={this.state.level}/>
            <label htmlFor='beginner' style={styles.levelBoxes}>Beginner</label>
            <input type='checkbox' onChange={this.handleButton} name='level' value={this.state.level}/>
            <label htmlFor='experienced' style={styles.levelBoxes}>Experienced</label>
            <input type='checkbox'onChange={this.handleButton} name='level' value={this.state.level}/>
            <label htmlFor='advanced' style={styles.levelBoxes}>Advanced</label>
          </div>
          <select className='activities' onChange={this.handleChange} name='activities' value={this.state.activities} style={styles.activities}>
            <option value='type'>Activity Type</option>
            <option value='Running'>Running</option>
            <option value='Basketball'>Basketball</option>
            <option value='Frisbee'>Frisbee Golf</option>
            <option value='Tennis'>Tennis</option>
            <option value='Jogging'>Jogging</option>
            <option value='Walking'>Walking</option>
          </select>
          <MuiThemeProvider>
             <DatePicker hintText="Choose Day" container="inline" mode="landscape" style={styles.calendar}/>
          </MuiThemeProvider>
          <div className='notes'>
            <textarea onChange={this.handleChange} name='notes' value={this.state.notes} style={styles.notes} placeholder="Additional Notes"></textarea>
          </div>
          <div style={styles.startTime}>
              <select className='start' onChange={this.handleChange} name='start' value={this.state.start} style={styles.input}>
                <option value='start'>Start Time</option>
                <option value="12:00 am">12:00 am</option>
                <option value="1:00 am">1:00 am</option>
                <option value="2:00 am">2:00 am</option>
                <option value="3:00 am">3:00 am</option>
                <option value="4:00 am">4:00 am</option>
                <option value="5:00 am">5:00 am</option>
                <option value="6:00 am">6:00 am</option>
                <option value="7:00 am">7:00 am</option>
                <option value="8:00 am">8:00 am</option>
                <option value="9:00 am">9:00 am</option>
                <option value="10:00 am">10:00 am</option>
                <option value="11:00 am">11:00 am</option>
                <option value="12:00 pm">12:00 pm</option>
                <option value="1:00 pm">1:00 pm</option>
                <option value="2:00 pm">2:00 pm</option>
                <option value="3:00 pm">3:00 pm</option>
                <option value="4:00 pm">4:00 pm</option>
                <option value="5:00 pm">5:00 pm</option>
                <option value="6:00 pm">6:00 pm</option>
                <option value="7:00 pm">7:00 pm</option>
                <option value="8:00 pm">8:00 pm</option>
                <option value="9:00 pm">9:00 pm</option>
                <option value="10:00 pm">10:00 pm</option>
                <option value="11:00 pm">11:00 pm</option>
              </select>
          </div>
          <div style={styles.endTime}>
              <select className='end' onChange={this.handleChange} name='end' value={this.state.end} style={styles.input}>
                <option value='end'>End Time</option>
                <option value="12:00 am">12:00 am</option>
                <option value="1:00 am">1:00 am</option>
                <option value="2:00 am">2:00 am</option>
                <option value="3:00 am">3:00 am</option>
                <option value="4:00 am">4:00 am</option>
                <option value="5:00 am">5:00 am</option>
                <option value="6:00 am">6:00 am</option>
                <option value="7:00 am">7:00 am</option>
                <option value="8:00 am">8:00 am</option>
                <option value="9:00 am">9:00 am</option>
                <option value="10:00 am">10:00 am</option>
                <option value="11:00 am">11:00 am</option>
                <option value="12:00 pm">12:00 pm</option>
                <option value="1:00 pm">1:00 pm</option>
                <option value="2:00 pm">2:00 pm</option>
                <option value="3:00 pm">3:00 pm</option>
                <option value="4:00 pm">4:00 pm</option>
                <option value="5:00 pm">5:00 pm</option>
                <option value="6:00 pm">6:00 pm</option>
                <option value="7:00 pm">7:00 pm</option>
                <option value="8:00 pm">8:00 pm</option>
                <option value="9:00 pm">9:00 pm</option>
                <option value="10:00 pm">10:00 pm</option>
                <option value="11:00 pm">11:00 pm</option>
              </select>
          </div>
          <textarea placeholder='Gear Required If Applicable' onChange={this.handleChange} name='gear' value={this.state.gear} style={styles.textarea}></textarea>       
          <button onClick={this.createActivity} style={styles.create}>Create</button><h5 style={styles.or}>Or</h5><button onClick={this.handleBrowse} style={styles.browse}>Browse</button>
          <Table activityArray={[...this.state.activityArray]}/>
      </div> // end of container
    )
  }
}

function mapStateToProps(appState) {
  return {park: appState.park}
}
export default connect(mapStateToProps)(ParkView)