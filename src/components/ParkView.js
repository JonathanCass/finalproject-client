import React from 'react'
import styles from './ParkView.styles'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DatePicker from 'material-ui/DatePicker'
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
        gear:'',
        park:'',
        activityArray:[]
   }
}
createActivity = (e) => {
  // console.log(createActivityObj)
  e.preventDefault()
  var createActivityObj ={
      play:this.state.play,
      level:this.state.level,
      activities:this.state.activities,
      // date:this.state.date,
      notes:this.state.notes,
      start:this.state.start,
      gear:this.state.gear,
      park:this.state.park
  }
  // postCreateActivity(createActivityObj)
  this.setState({
    activityArray : [...this.state.activityArray, createActivityObj],
    play:'', level:'', activities:'', notes:'', start:'', daynight:'', gear:''
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
  console.log(e.target.value)
  if(e.target.value) {
    
  }
}
handleLevel = (e) => { // for Type of Play/Experience
  this.setState({
    level: e.target.value,
  })
}

componentWillMount() {
  getParks()
}

  render() {
    return (
      <div style={styles.container}>     
          <h2 style={styles.h2}>Type Of Play</h2>
          <div style={styles.radioPlay}>
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
            <input type='radio' style={styles.radioQuad} id="northwestloc" name='quadrant' value="Northwest"/>
            <label htmlFor='northwest' style={styles.radioLabel}>Northwest</label>
            <input type='radio' style={styles.radioQuad} id="southwestloc" name='quadrant' value="Southwest"/>
            <label htmlFor='southwest' style={styles.radioLabel}>Southwest</label>
            <input type='radio' style={styles.radioQuad} id="northeastloc" name='quadrant' value="Northeast"/>
            <label htmlFor='northeast' style={styles.radioLabel}>Northeast</label>
            <input type='radio' style={styles.radioQuad} id="southeastloc" name="quadrant" value="Southeast"/>
            <label htmlFor='southeast' style={styles.radioLabel}>Southeast</label>
          
           
           <div id='northwest'> 
             <select onChange={this.handleButton} name="park" value={this.state.parks} style={styles.parksBox}>
               <option>North West Parks</option>  
               {this.props.parks.filter((park, i)=>{
                  return park.quadrant === 'northwest'
               }).map(park =>{   
                    return <option key={park + park.id}>{park.name}</option>         
               })}
             </select>
             <select id='activities' onChange={this.handleChange} name='activities' value={this.state.activities}>
               <option>Activity Type</option>
                  {this.props.parks.filter((park, i)=>{
                  return park.quadrant ==='northwest'
               }).map(park =>{  
                  if(park.basketball === 'yes'){
                    console.log(park.name, 'basketball')
                  } if(park.volleyball === 'yes'){
                    console.log(park.name, 'volleyball')
                  } if(park.walking === 'yes') {
                    console.log(park.name, 'walking')
                  } if(park.running === 'yes'){
                    console.log(park.name, 'running')
                  } if(park.tennis === 'yes'){
                    console.log(park.name, 'tennis')
                  } if(park.frisbee_gold === 'yes'){
                    console.log(park.name, 'frisbee golf')
                  }
               })}            
             </select>
             <MuiThemeProvider onChange={this.handleChange} name='date' value={this.state.date}>
                <DatePicker hintText="Choose Day" container="inline" name='date' value={this.state.date} mode="landscape" style={styles.calendar}/>
             </MuiThemeProvider>
             <textarea placeholder='Gear Required If Applicable' onChange={this.handleChange} name='gear' value={this.state.gear} style={styles.gear}></textarea>
             <div style={styles.startTime}>
              <select className='start' onChange={this.handleChange} name='start' value={this.state.start} style={styles.start}>
                <option value='start'>Start Time</option>
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
              <select style={styles.daynight}>
                <option value=''>AM/PM</option>
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
             </div>
             <div className='notes'>
                <textarea onChange={this.handleChange} name='notes' value={this.state.notes} style={styles.notes} placeholder="Additional Notes"></textarea>
             </div>
             <button onClick={this.createActivity} style={styles.create}>Create</button><h5 style={styles.or}>Or</h5>
             <button onClick={this.handleBrowse} style={styles.browse}>Browse</button>
           </div>

           <div id='southwest'>
             <select onChange={this.handleButton} name="park" value={this.state.parks} style={styles.parksBox}>     
               <option>South West Parks</option>
                {this.props.parks.filter((park, i)=>{
                   return park.quadrant === 'southwest'
                }).map(park =>{   
                    return <option key={park + park.id}>{park.name}</option>
                })} 
             </select>
             <select id='activities' onChange={this.handleChange} name='activities' value={this.state.activities}>
                <option value='type'>Activity Type</option>
                {this.props.parks.filter((park, i)=>{
                  return park.quadrant === 'southwest'
                }).map(park => {
                    if(park.basketball === 'yes'){
                    console.log(park.name, 'basketball')
                  } if(park.volleyball === 'yes'){
                    console.log(park.name, 'volleyball')
                  } if(park.walking === 'yes') {
                    console.log(park.name, 'walking')
                  } if(park.running === 'yes'){
                    console.log(park.name, 'running')
                  } if(park.tennis === 'yes'){
                    console.log(park.name, 'tennis')
                  } if(park.frisbee_gold === 'yes'){
                    console.log(park.name, 'frisbee golf')
                  }
                })}
             </select>
             <MuiThemeProvider>
                <DatePicker hintText="Choose Day" container="inline" name='date' value={this.state.date} mode="landscape" style={styles.calendar}/>
             </MuiThemeProvider>
             <textarea placeholder='Gear Required If Applicable' onChange={this.handleChange} name='gear' value={this.state.gear} style={styles.gear}></textarea>
             <div style={styles.startTime}>
              <select className='start' onChange={this.handleChange} name='start' value={this.state.start} style={styles.start}>
                <option value='start'>Start Time</option>
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
              <select style={styles.daynight}>
                <option value=''>AM/PM</option>
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
             </div>
             <div className='notes'>
                <textarea onChange={this.handleChange} name='notes' value={this.state.notes} style={styles.notes} placeholder="Additional Notes"></textarea>
             </div>
             <button onClick={this.createActivity} style={styles.create}>Create</button><h5 style={styles.or}>Or</h5>
             <button onClick={this.handleBrowse} style={styles.browse}>Browse</button>
           </div>

           <div id='southeast'>
             <select onChange={this.handleButton} name="park" value={this.state.parks} style={styles.parksBox}> 
               <option>South East Parks</option>    
                {this.props.parks.filter((park, i)=>{
                   return park.quadrant === 'southeast'
                }).map(park =>{   
                    return <option key={park + park.id}>{park.name}</option>
                })} 
             </select>
             <select id='activities' onChange={this.handleChange} name='activities' value={this.state.activities}>
                <option value='type'>Activity Type</option>
                {this.props.parks.filter((park,i)=>{
                  return park.quadrant === 'souteast'
                }).map(park => {
                    return <option key={park + park.id}>{park.type}</option>
                })}
             </select>
             <MuiThemeProvider>
                <DatePicker hintText="Choose Day" container="inline" name='date' value={this.state.date} mode="landscape" style={styles.calendar}/>
             </MuiThemeProvider>
             <textarea placeholder='Gear Required If Applicable' onChange={this.handleChange} name='gear' value={this.state.gear} style={styles.gear}></textarea>
             <div style={styles.startTime}>
              <select className='start' onChange={this.handleChange} name='start' value={this.state.start} style={styles.start}>
                <option value='start'>Start Time</option>
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
              <select style={styles.daynight}>
                <option value=''>AM/PM</option>
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
             </div>
             <div className='notes'>
                <textarea onChange={this.handleChange} name='notes' value={this.state.notes} style={styles.notes} placeholder="Additional Notes"></textarea>
             </div>
             <button onClick={this.createActivity} style={styles.create}>Create</button><h5 style={styles.or}>Or</h5>
             <button onClick={this.handleBrowse} style={styles.browse}>Browse</button>
           </div>

           <div id='northeast'>
             <select onChange={this.handleButton} name="park" value={this.state.parks} style={styles.parksBox}> 
                <option>North East Parks</option>    
                {this.props.parks.filter((park, i)=>{
                   return park.quadrant === 'northeast'
                }).map(park =>{  
                    return <option key={park + park.id}>{park.name}</option>
                })} 
             </select>
             <select id='activities' onChange={this.handleChange} name='activities' value={this.state.activities}>
                <option value='type'>Activity Type</option>
                {this.props.parks.filter((park, i)=>{
                  return park.quadrant === 'northeast'
                }).map(park => {
                    return <option key={park + park.id}>{park.type}</option>
                })}
             </select>
             <MuiThemeProvider>
                <DatePicker hintText="Choose Day" container="inline" name='date' value={this.state.date} mode="landscape" style={styles.calendar}/>
             </MuiThemeProvider>
             <textarea placeholder='Gear Required If Applicable' onChange={this.handleChange} name='gear' value={this.state.gear} style={styles.gear}></textarea>
             <div style={styles.startTime}>
              <select className='start' onChange={this.handleChange} name='start' value={this.state.start} style={styles.start}>
                <option value='start'>Start Time</option>
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
              <select onChange={this.handleChange} name='start' value={this.state.start} style={styles.daynight}>
                <option value=''>AM/PM</option>
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
             </div>
             <div className='notes'>
                <textarea onChange={this.handleChange} name='notes' value={this.state.notes} style={styles.notes} placeholder="Additional Notes"></textarea>
             </div>
             <button onClick={this.createActivity} style={styles.create}>Create</button><h5 style={styles.or}>Or</h5>
             <button onClick={this.handleBrowse} style={styles.browse}>Browse</button>
           </div>
          </div>       
          <Table activityArray={[...this.state.activityArray]}/>
      </div> // end of container
    )
  }
}

function mapStateToProps(appState) {
  return { dbUsers: appState.dbUsers, currentUserID : appState.currentUserId, parks: appState.parks}
}
export default connect(mapStateToProps)(ParkView)