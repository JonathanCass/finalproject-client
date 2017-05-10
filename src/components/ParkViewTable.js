import React from 'react'
import styles from './Table.styles'
import {connect} from 'react-redux'


class Table extends React.Component {
    constructor() {
    super()
    this.state = {
      
    }
  }
render() {

    const park_map =  this.props.park_map ||     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1630.1258538673626!2d-115.07165919748192!3d36.029062416416544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8d1c7514648f7%3A0x58b9ffe42cace0c8!2sMountain+View+Park!5e1!3m2!1sen!2sus!4v1494221097861" width="600" height="450" ></iframe>
    return(
        <div className='tableAreaContainer' style={styles.tableAreaContainer}>
            <div>{park_map}</div>
            <h4 style={styles.here}>Map Goes Here</h4>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Activity</th>
                        <th>Level</th>
                    </tr>
                </thead>
                {this.props.activityArray.map(event =>(
                    <tbody key={Math.random()}>
                    <tr>
                        <td style={styles.tableRow}>{event.date}</td>
                        <td style={styles.tableRow}>{event.start}</td>
                        <td style={styles.tableRow}>{event.end}</td>
                        <td style={styles.tableRow}>{event.activities}</td>
                        <td style={styles.tableRow}>{event.level}</td>
                    </tr>
                    <tr>
                        <td style={styles.secondRow}>{event.notes}</td>
                    </tr>
                    </tbody>

                   
                ))}
            </table> 
        </div> 
        )
    }
}

function mapStateToProps(appState){
    return { dbUsers: appState.dbUsers, currentUserID : appState.currentUserId,}
}

export default connect(mapStateToProps)(Table)