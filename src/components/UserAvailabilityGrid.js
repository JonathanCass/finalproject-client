import React from 'react'

const styles = {
    UAGridContainer:{
        width: 650,
        padding: 10,
    },
    gridLabel:{
        width: 151,
        height: 38,
        color: 'white',
        fontSize: 20,
        display: 'inline-block',
        lineHeight: '40px',
        textAlign: 'center'
    },
    grid:{
        width:630,
        border: 'solid 1px black',
        borderWidth: '1px 0 0 1px',
        display: 'flex',
        marginTop: -1
    },
    gridBox:{
        width: 148,
        height: 40,
        border: 'solid 1px black',
        borderWidth: '0 1px 1px 0',
        display: 'inline-block',
        background: '#F2F2F2',
        lineHeight: '42px',
        textAlign: 'center'
    },
    removeEntry:{
        width: 40,
        height: 40,
        border: 'solid 1px black',
        borderWidth: '0 1px 1px 0',
        display: 'inline-block',
        background: '#1DA2CF',
        color: 'white',
        textAlign: 'center',
        fontSize: 30
    },
    gridHeader:{
        height: 40,
        paddingTop: 10,
        width: 630,
        fontSize: 32,
        color: '#FFFF00',
        textAlign: 'center',
        display: 'block',
        marginBottom: 10 
  },
}
class UserAvailabilityGrid extends React.Component {
//    constructor(props) {
 
//     super(props)
//    }

  render() {
    return (
      <div style={styles.UAGridContainer}>
        <div style={styles.gridHeader}>Currently Available For</div>  
        <div style={styles.gridLabel}>City Section</div>
        <div style={styles.gridLabel}>Day of Week</div>
        <div style={styles.gridLabel}>From</div>
        <div style={styles.gridLabel}>To</div>
       
       {this.props.availabilityArray.map(entry=>(
            <div style={styles.grid} key={Math.random()}>
                <div style={styles.gridBox}>{entry.area}</div>
                <div style={styles.gridBox}>{entry.day}</div>
                <div style={styles.gridBox}>{entry.from}</div>
                <div style={styles.gridBox}>{entry.to}</div>
                <div style={styles.removeEntry}>-</div>
            </div>	
		))}

      </div>
    )
  }
}

export default UserAvailabilityGrid