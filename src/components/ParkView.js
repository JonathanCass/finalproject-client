import React from 'react'
import styles from './ParkView.styles'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DatePicker from 'material-ui/DatePicker'
import Table  from './ParkViewTable'

class ParkView extends React.Component {
  constructor(props) {
   super(props)
   this.state = {
        play:'',
        level:'',
        activities:'',
        notes:'',
        start:'',
        end:'',
        value:''
   }
}
handleClick = (e) => {
  e.preventDefault()
  
}
handleChange = (e) => {
  console.log('here')
  this.setState({
    [e.target.name]:e.target.value
  })
}
  render() {
    return (
      <div style={styles.container}>    
          <h2 style={styles.h2}>Type Of Play</h2>
          <div style={styles.radioContainer}>
            <input type='radio' onChange={this.handleChange} name='play' value={this.state.play}/>
            <label for="competitive" style={styles.radio}>Competitive</label>
            <input type='radio' onChange={this.handleChange} name='play' value={this.state.play}/>
            <label for="leisurely" style={styles.radio}>Leisurely</label>
          <div className='line' style={styles.line}></div>
          </div>
          <div className='level'style={styles.level}>
            <input type='checkbox' onChange={this.handleChange} name='level' value={this.state.level}/>
            <label for='beginner' style={styles.levelBoxes}>Beginner</label>
            <input type='checkbox' onChange={this.handleChange} name='level' value={this.state.level}/>
            <label for='experienced' style={styles.levelBoxes}>Experienced</label>
            <input type='checkbox'onChange={this.handleChange} name='level' value={this.state.value}/>
            <label for='advanced' style={styles.levelBoxes}>Advanced</label>
          </div>
          <select className='activities' onChange={this.handleChange} name='activities' value={this.state.activities} style={styles.activities}>
            <option value='type'>Activity Type</option>
            <option value='running'>Running</option>
            <option value='basketball'>Basketball</option>
            <option value='frisbee'>Frisbee Golf</option>
            <option value='tennis'>Tennis</option>
            <option value='jogging'>Jogging</option>
            <option value='walking'>Walking</option>
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
                <option value="0">12:00 am</option>
                <option value="1">1:00 am</option>
                <option value="2">2:00 am</option>
                <option value="3">3:00 am</option>
                <option value="4">4:00 am</option>
                <option value="5">5:00 am</option>
                <option value="6">6:00 am</option>
                <option value="7">7:00 am</option>
                <option value="8">8:00 am</option>
                <option value="9">9:00 am</option>
                <option value="10">10:00 am</option>
                <option value="11">11:00 am</option>
                <option value="12">12:00 pm</option>
                <option value="13">1:00 pm</option>
                <option value="14">2:00 pm</option>
                <option value="15">3:00 pm</option>
                <option value="16">4:00 pm</option>
                <option value="17">5:00 pm</option>
                <option value="18">6:00 pm</option>
                <option value="19">7:00 pm</option>
                <option value="20">8:00 pm</option>
                <option value="21">9:00 pm</option>
                <option value="22">10:00 pm</option>
                <option value="23">11:00 pm</option>
              </select>
          </div>
          <div style={styles.endTime}>
              <select className='end' onChange={this.state.handleChange} name='end' value={this.state.end} style={styles.input}>
                <option value='end'>End Time</option>
                <option value="0">12:00 am</option>
                <option value="1">1:00 am</option>
                <option value="2">2:00 am</option>
                <option value="3">3:00 am</option>
                <option value="4">4:00 am</option>
                <option value="5">5:00 am</option>
                <option value="6">6:00 am</option>
                <option value="7">7:00 am</option>
                <option value="8">8:00 am</option>
                <option value="9">9:00 am</option>
                <option value="10">10:00 am</option>
                <option value="11">11:00 am</option>
                <option value="12">12:00 pm</option>
                <option value="13">1:00 pm</option>
                <option value="14">2:00 pm</option>
                <option value="15">3:00 pm</option>
                <option value="16">4:00 pm</option>
                <option value="17">5:00 pm</option>
                <option value="18">6:00 pm</option>
                <option value="19">7:00 pm</option>
                <option value="20">8:00 pm</option>
                <option value="21">9:00 pm</option>
                <option value="22">10:00 pm</option>
                <option value="23">11:00 pm</option>
              </select>
          </div>
          <textarea placeholder='Gear Required If Applicable' onChange={this.handleChange} name='gear' value={this.state.gear} style={styles.textarea}></textarea>       
          <button onClick={this.state.handleClick} style={styles.create}>Create</button><h5 style={styles.or}>Or</h5><button onClick={this.state.handleClick} style={styles.browse}>Browse</button>
          <Table /> 
      </div> // end of container
    )
  }
}

export default ParkView