
import React from 'react'
import styles from './ParkView.styles'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DatePicker from 'material-ui/DatePicker'
import Table from './ParkViewTable'
// import {postCreateActivity} from '../api/messaging'
import '../assets/home.css'
import { connect } from 'react-redux'
import { getParks } from '../api/messaging'
import { getParkActivities } from '../api/messaging'
import moment from 'moment';



class ParkView extends React.Component {
  constructor() {
   super()
   this.state = {
        id:'',
        play:'',
        level:'',
        activities:'',
        notes:'',
        start:'',
        daynight:'',
        gear:'',
        park:'',
        controlledDate:'',
        activityArray:[], 
       
   }
}
createActivity = (e) => {
  console.log(createActivityObj)
  e.preventDefault()
  var createActivityObj ={
      play:this.state.play,
      level:this.state.level,
      activities:this.state.activities,
      // date:this.state.date,
      notes:this.state.notes,
      start:this.state.start,
      daynight:this.state.daynight,
      gear:this.state.gear,
      park:this.state.park,
      controlledDate:this.state.controlledDate

    
  }
  // add(createActivityObj)
  this.setState({
    activityArray : [...this.state.activityArray, createActivityObj],
    play:'', level:'', activities:'', notes:'', start:'', daynight:'', gear:'', park:''
  })
}


handleChange = (e) => {
  this.setState({
    [e.target.name]:e.target.value
  })    
  
}
handleButton = (e) => { // handle for quadrants/parks
  this.setState({
    park:e.target.value,
  })
}

handleLevel = (e) => { // for Type of Play/Experience
  this.setState({
    level: e.target.value,
  })
}

handleDate = (e, date) =>{ //MUI Cal
  this.setState({
   controlledDate: date
  })
}

handleRadButton = (e) => { // handle for play
 this.setState({
    play:e.target.value
 })
}

formatDate(date){
  return  moment(new Date()).format('YYYY-MM-DD')
}

componentWillMount() {
  getParks()
  getParkActivities()

}

  render() {
    //  console.log(this.props.activities)
    console.log(this.state.controlledDate, 'parkview')
    return (
      <div style={styles.container}>  

          <h2 style={styles.h2}>Type Of Play</h2>
          <div style={styles.radioPlay}>

            <input type='radio' onChange={this.handleRadButton} name='play' value="Competitive" style={styles.cursor}/>
            <label htmlFor="competitive" style={styles.radio}>Competitive</label>
            <input type='radio'onChange={this.handleRadButton} name='play' value="Leisurely" style={styles.cursor}/>
            <label htmlFor="leisurely" style={styles.radio}>Leisurely</label>
          <div className='line' style={styles.line}></div>
          </div>
          <div className='level'style={styles.level}>
            <input type='checkbox' onChange={this.handleLevel} name='level' value="Beginner" style={styles.cursor}/>
            <label htmlFor='beginner' style={styles.levelBoxes}>Beginner</label>
            <input type='checkbox' onChange={this.handleLevel} name='level' value="Experienced" style={styles.cursor}/>
            <label htmlFor='experienced' style={styles.levelBoxes}>Experienced</label>
            <input type='checkbox'onChange={this.handleLevel} name='level' value="Advanced" style={styles.cursor}/>
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
             <select  onChange={this.handleButton} name="park" value={this.state.parkName} style={styles.parksBox}>
               <option>North West Parks</option>  
               {this.props.parks.filter((park, i)=>{
                  return park.quadrant === 'northwest'
               }).map(park =>{   
                    return <option key={park.id}>{park.name}</option>         
               })}
             </select>
             <select  onChange={this.handleChange} name='activities' value={this.state.activities} style={styles.activities}>
               <option>Activity Type</option>
               {this.props.activities.filter((activity, i)=>{
                   return activity.park_name === this.state.park
               }).map(activity =>{
                    return <option key={'activity' + Math.random()}>{activity.activity_name}</option>
               })}            
             </select>
             <MuiThemeProvider>
                <DatePicker hintText="Choose Day" container="inline" mode="landscape" formatDate={this.formatDate}  value={this.state.controlledDate} onChange={this.handleDate} style={styles.calendar}/>
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
              <select onChange={this.handleChange} name='daynight' value={this.state.daynight} style={styles.daynight}>
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
             <Table activityArray={[...this.state.activityArray] }/> 
           </div>

           <div id='southwest'>
             <select onChange={this.handleButton} name="park" value={this.state.parkName} style={styles.parksBox}>     
               <option>South West Parks</option>
                {this.props.parks.filter((park, i)=>{
                   return park.quadrant === 'southwest'
                }).map(park =>{   
                    return <option key={park + park.id}>{park.name}</option>
                })} 
             </select>
             <select onChange={this.handleChange} name='activities' value={this.state.activities} style={styles.activities}>
               <option>Activity Type</option>
               {this.props.activities.filter((activity, i)=>{
                   return activity.park_name === this.state.park
               }).map(activity =>{
                    return <option key={'activity' + Math.random()}>{activity.activity_name}</option>
               })}            
             </select>
             <MuiThemeProvider>
                <DatePicker hintText="Choose Day" container="inline" mode="landscape" style={styles.calendar}/>
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
              <select onChange={this.handleChange} name='daynight' value={this.state.daynight} style={styles.daynight}>
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
             <Table activityArray={[...this.state.activityArray] }/> 
           </div>

           <div id='southeast'>
             <select onChange={this.handleButton} name="park" value={this.state.parkName} style={styles.parksBox}> 
               <option>South East Parks</option>    
                {this.props.parks.filter((park, i)=>{
                   return park.quadrant === 'southeast'
                }).map(park =>{   
                    return <option key={park + park.id}>{park.name}</option>
                })} 
             </select>
             <select  onChange={this.handleChange} name='activities' value={this.state.activities} style={styles.activities}>
               <option>Activity Type</option>
               {this.props.activities.filter((activity, i)=>{
                   return activity.park_name === this.state.park
               }).map(activity =>{
                    return <option key={'activity' + Math.random()}>{activity.activity_name}</option>
               })}            
             </select>
             <MuiThemeProvider>
                <DatePicker hintText="Choose Day" container="inline" mode="landscape" style={styles.calendar}/>
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
              <select onChange={this.handleChange} name='daynight' value={this.state.daynight} style={styles.daynight}>
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
              <Table activityArray={[...this.state.activityArray] }/> 
           </div>

           <div id='northeast'>
             <select onChange={this.handleButton} name="park" value={this.state.parkName} style={styles.parksBox}> 
                <option>North East Parks</option>    
                {this.props.parks.filter((park, i)=>{
                   return park.quadrant === 'northeast'
                }).map(park =>{  
                    return <option key={park + park.id}>{park.name}</option>
                })} 
             </select>

             <select  onChange={this.handleChange} name='activities' value={this.state.activities} style={styles.activities}>
               <option>Activity Type</option>
               {this.props.activities.filter((activity, i)=>{
                   return activity.park_name === this.state.park
               }).map(activity =>{
                    return <option key={'activity' + Math.random()}>{activity.activity_name}</option>
               })}            
             </select>
             <MuiThemeProvider>
                <DatePicker hintText="Choose Day" container="inline" mode="landscape" name='date' style={styles.calendar}/>
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
              <select onChange={this.handleChange} name='daynight' value={this.state.daynight} style={styles.daynight}>
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
             <Table activityArray={[...this.state.activityArray] }/> 
           </div>
            
          </div>    
           
      </div> // end of container
      
    )
  }
}

function mapStateToProps(appState) {
  return { dbUsers: appState.dbUsers, currentUserID : appState.currentUserId, parks: appState.parks, activities:appState.activities}
}
export default connect(mapStateToProps)(ParkView)
