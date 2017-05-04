import React from 'react'

const styles = {
    GridContainer:{
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
        borderWidth: '1px 0 1px 1px',
        display: 'flex',
        marginTop: -1
    },
    gridBox:{
        width: 148,
        height: 40,
        border: 'solid 1px black',
        borderWidth: '0 1px 0px 0',
        display: 'inline-block',
        background: '#F2F2F2',
        lineHeight: '42px',
        textAlign: 'center',
        overflow: 'hidden',
    },
    removeEntry:{
        width: 40,
        height: 40,
        border: 'solid 1px black',
        borderWidth: '0 1px 0px 0',
        display: 'inline-block',
        background: '#1DA2CF',
        color: 'white',
        textAlign: 'center',
        fontSize: 30
    },
}
class UsersEvents extends React.Component {
//   constructor(props) {
 
//    super(props)
//   }

  render() {
    return (
      <div style={styles.GridContainer}>      
        <div style={styles.gridLabel}>Park</div>
        <div style={styles.gridLabel}>Time</div>
        <div style={styles.gridLabel}>Activity</div>
        <div style={styles.gridLabel}>With</div>
       
        <div style={styles.grid}>
            <div style={styles.gridBox}>Green Valley Park</div>
            <div style={styles.gridBox}>Sep 21st, 1:15 PM</div>
            <div style={styles.gridBox}>Tennis</div>
            <div style={styles.gridBox}>Steven Wright</div>
            <div style={styles.removeEntry}>-</div>
        </div>
        <div style={styles.grid}>
            <div style={styles.gridBox}>Las Vegas Park</div>
            <div style={styles.gridBox}>Dec 1st, 9:15 AM</div>
            <div style={styles.gridBox}>Basketball</div>
            <div style={styles.gridBox}>Angela Merkel</div>
            <div style={styles.removeEntry}>-</div>
        </div>
        <div style={styles.grid}>
            <div style={styles.gridBox}>Green Valley Park</div>
            <div style={styles.gridBox}>Apr 6th, 5:15 PM</div>
            <div style={styles.gridBox}>Volleyball</div>
            <div style={styles.gridBox}>Susie Q</div>
            <div style={styles.removeEntry}>-</div>
        </div>
      
      </div>
    )
  }
}

export default UsersEvents