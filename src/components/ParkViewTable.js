import React from 'react'
import styles from './Table.styles'

class Table extends React.Component {
    // constructor() {
    //     super()
   
render() {
    return(
        <div className='tableAreaContainer' style={styles.tableAreaContainer}>
            <img alt='' src="http://www.jqueryscript.net/images/Easy-Customizable-jQuery-Google-Maps-Plugin-googlemaps-js.jpg" style={styles.map}/>
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

export default Table