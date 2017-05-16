import React from 'react'
import styles from './Table.styles'
// import { getParks } from '../api/messaging'
import {connect} from 'react-redux'

class Table extends React.Component {
    constructor() {
    super()
    this.state = {
    }
  }

//   componentWillMount(){
//     getParks()
//   }

render() {
    // console.log(this.props.activityArray, 'activityArray')
    return(
        
        <div className='tableAreaContainer' style={styles.tableAreaContainer}>  
         {this.props.activityArray.filter(park=>{
              return park.park
         }).map(park=>{
             return <div key={'park' + Math.random()} style={styles.map}>{<iframe width="900" height="450" 
            src={"https://www.google.com/maps/embed/v1/search?key=AIzaSyAc0yrVazEG4l-Hz05xlttBMVm-LgsXync&zoom=16&q=" + park.park} allowFullScreen></iframe>}</div>
         })}
           
            <div>
                <table style={styles.table}>
                   
                    <thead style={styles.tableHead}>
                        <tr>
                            <th>Play</th>
                            <th>Date</th>
                            <th>From</th>
                            <th>Activity</th>
                            <th>Level</th>
                            <th>Notes</th>
                            <th>Gear</th>
                            <th>Park</th>
                        </tr>
                    </thead>
                    
                    {this.props.activityArray.map(event =>(
                        <tbody key={Math.random()}>
                        <tr style={styles.row}>
                            <td style={styles.tableRow}>{event.play}</td>
                            <td style={styles.tableRow}>{event.controlledDate}</td>
                            <td style={styles.tableRow}>{event.start} {event.daynight}</td>
                            <td style={styles.tableRow}>{event.activities}</td>
                            <td style={styles.tableRow}>{event.level}</td>
                            <td style={styles.tableRow}>{event.notes}</td>
                            <td style={styles.tableRow}>{event.gear}</td>
                            <td style={styles.tableRow}>{event.park}</td>   
                        </tr>
                        </tbody>               
                    ))}
                </table> 
            </div>
        </div> 
        )
    }
}

function mapStateToProps(appState){
    return { dbUsers: appState.dbUsers, currentUserID : appState.currentUserId, parks: appState.parks}
}

export default connect(mapStateToProps)(Table)