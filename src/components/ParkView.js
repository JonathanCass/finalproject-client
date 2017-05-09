import React from 'react'
import styles from './ParkView.styles'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import DatePicker from 'material-ui/DatePicker'
import Table from './ParkViewTable'
// import {postCreateActivity} from '../api/messaging'
import '../assets/home.css'
import { connect } from 'react-redux'
import { getParks } from '../api/messaging'

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
        park:'',
        activityArray:[]
   }
}
createActivity = (e) => {
  e.preventDefault()
  var createActivityObj ={
      play:this.state.play,
      level:this.state.level,
      activities:this.state.activities,
      // date:this.state.date,
      notes:this.state.notes,
      start:this.state.start,
      end:this.state.end,
      gear:this.state.gear,
      park:this.state.park
  }
  // postCreateActivity(createActivityObj)
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
  this.setState({
    [e.target.name]:e.target.value
  })
}
handleLevel = (e) => { // for Type of Play/Experience
  this.setState({
    level: e.target.value
  })
}
// handleBrowse = (e) => {
//   e.preventDefault()
//   console.log('map through parks')
// }
componentWillMount() {
  getParks()
}

  render() {
  console.log(this.props.parks)
    
    return (
      <div style={styles.container}>     
          <h2 style={styles.h2}>Type Of Play</h2>
          <div style={styles.radioContainer}>
            <input type='radio' onChange={this.handleButton} name='play' value="Competitive"/>
            <label htmlFor="competitive" style={styles.radio}>Competitive</label>
            <input type='radio'onChange={this.handleButton} name='play' value="Leisurely"/>
            <label htmlFor="leisurely" style={styles.radio}>Leisurely</label>
          <div className='line' style={styles.line}></div>
          </div>
          <div className='level'style={styles.level}>
            <input type='checkbox' onChange={this.handleLevel} name='level' value="Beginner"/>
            <label htmlFor='beginner' style={styles.levelBoxes}>Beginner</label>
            <input type='checkbox' onChange={this.handleLevel} name='level' value="Experienced"/>
            <label htmlFor='experienced' style={styles.levelBoxes}>Experienced</label>
            <input type='checkbox'onChange={this.handleLevel} name='level' value="Advanced"/>
            <label htmlFor='advanced' style={styles.levelBoxes}>Advanced</label>
          </div>
         <div>
            <input type='radio' id="northwestloc" name='quadrant' value="Northwest"/>
            <label htmlFor='northwest'>Northwest</label>
            <input type='radio' id="southwestloc" name='quadrant' value="Southwest"/>
            <label htmlFor='southwest'>Southwest</label>
            <input type='radio' id="northeastloc" name='quadrant' value="Northeast"/>
            <label htmlFor='northeast'>Northeast</label>
            <input type='radio' id="southeastloc" name="quadrant" value="Southeast"/>
            <label htmlFor='southeast'>Southeast</label>
          
           <div id='northwest'>
             <select onChange={this.handleButton} name="park" value={this.state.parks} style={styles.parksBox}>     
                {this.props.parks.filter((park, i)=>{
                   return park.quadrant === 'northwest'
                }).map(park =>{   
                   return (<option key={park + park.id}>{park.name}</option>)
                })} 
             </select>
           </div>
           <div id='southwest'>
             <select onChange={this.handleButton} name="park" value={this.state.parks} style={styles.parksBox}>     
                {this.props.parks.filter((park, i)=>{
                   return park.quadrant === 'southwest'
                }).map(park =>{   
                   return (<option key={park + park.id}>{park.name}</option>)
                })} 
             </select>
           </div>
           <div id='southeast'>
             <select onChange={this.handleButton} name="park" value={this.state.parks} style={styles.parksBox}>     
                {this.props.parks.filter((park, i)=>{
                   return park.quadrant === 'southeast'
                }).map(park =>{   
                   return (<option key={park + park.id}>{park.name}</option>)
                })} 
             </select>
           </div>
           <div id='northeast'>
             <select onChange={this.handleButton} name="park" value={this.state.parks} style={styles.parksBox}>     
                {this.props.parks.filter((park, i)=>{
                   return park.quadrant === 'northeast'
                }).map(park =>{   
                   return (<option key={park + park.id}>{park.name}</option>)
                })} 
             </select>
           </div>
          </div>

          
           
          {/*<select className='activities' onChange={this.handleChange} name='activities' value={this.state.activities} style={styles.activities}>
            <option value='type'>Activity Type</option>
            <option value='Walking'>Walking</option>
            <option value='Running'>Running</option>
            <option value='Tennis'>Tennis</option>
            <option value='Frisbee Golf'>Frisbee Golf</option>
            <option value='Basketball'>Basketball</option>
            <option value='Volleyball'>Volleyball</option>
          </select>
          /*<MuiThemeProvider>
             <DatePicker hintText="Choose Day" container="inline" name='date' value={this.state.date} mode="landscape" style={styles.calendar}/>
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
          <textarea placeholder='Gear Required If Applicable' onChange={this.handleChange} name='gear' value={this.state.gear} style={styles.textarea}></textarea>      */}
          <button onClick={this.createActivity} style={styles.create}>Create</button><h5 style={styles.or}>Or</h5>
          <button onClick={this.handleBrowse} style={styles.browse}>Browse</button>
          
          <Table activityArray={[...this.state.activityArray]}/>
      </div> // end of container
    )
  }
}

function mapStateToProps(appState) {
  return { dbUsers: appState.dbUsers, currentUserID : appState.currentUserId, parks: appState.parks}
}
export default connect(mapStateToProps)(ParkView)