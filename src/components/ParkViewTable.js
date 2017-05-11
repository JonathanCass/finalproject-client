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
    const park_map =  this.props.park_map ||  <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d104204.53054904708!2d-115.15573192602163!3d36.12222981772679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sLas+Vegas%2C+NV+parks!5e1!3m2!1sen!2sus!4v1494390847446" width="600" height="450"></iframe>
    // console.log(this.props.parks)

    return(
        <div className='tableAreaContainer' style={styles.tableAreaContainer}>  
            <div style={styles.map}>{park_map}</div>
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
                        <tr>
                            <td style={styles.tableRow}>{event.play}</td>
                            <td style={styles.tableRow}>{event.date}</td>
                            <td style={styles.tableRow}>{event.start}</td>
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