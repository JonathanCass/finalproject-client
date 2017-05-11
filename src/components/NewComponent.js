import React from 'react'
import styles from './ParkView.styles'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DatePicker from 'material-ui/DatePicker'

class New extends React.Component {
    constructor() {
        super()
    }

        render() {
        return (
            <div>
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
                  return park.quadrant === 'northwest'
               }).map(park =>{  
                  if(park.basketball === 'yes'){
                  console.log(park.name, 'has basketball') 
                } if(park.volleyball === 'yes'){
                  console.log(park.name, 'has volleyball')
                } if(park.walking === 'yes') {
                  console.log(park.name, 'has walking')
                } if(park.running === 'yes'){
                  console.log(park.name, 'has running')
                } if(park.tennis === 'yes'){
                  console.log(park.name, 'has tennis')
                } if(park.frisbee_gold === 'yes'){
                  console.log(park.name, 'has frisbee golf')
                }
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
                   return <option key={park + park.id}>{park.type}</option>
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
              <select onChange={this.handleChange} name='start' value={this.state.start} style={styles.daynight}>
                <option value=''>AM/PM</option>
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
             </div>
           </div>
        </div> //container
        )
    }          
}

export default New
