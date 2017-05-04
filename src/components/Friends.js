import React from 'react'
import 'font-awesome/css/font-awesome.css'

const styles={
    friendsContainer:{
        width: 650,
        display: 'inline-block',
        paddingLeft: 5,
        background: 'linear-gradient( to right, #FFD200 , #F7971E  )',
    },
    header:{
        width: 650,
        fontSize: 32,
        color: '#241EB1',
        textAlign: 'center',
        height: 40,
        paddingTop: 10,
        marginBottom: 20
    },
    userMain:{
        width: 650,
        display: 'flex'
    },
    avatar:{
        width: 200,
        height: 200,
        background: 'white',
        border: '1px solid black',
        borderRadius: 3,
        display: 'inline-block'
    },
    nextBlock:{
        width: 430,
        display: 'inline-block',
        padding: 10,
        marginLeft: 10
    },
    nextLabel:{ 
        display: 'flex',
        justifyContent: 'space-between', 
        width: 413,
        height: 50,
        fontSize: 28,
        color: '#d50000',
        textAlign: 'center',
        marginBottom: 10,
        paddingTop: 5,
        lineHeight: '40px'
    },
    arrowButton:{
        height:40,
        width:40,
        borderRadius: 5,
        background: "white",
        color: '#C81740',
        fontSize: 24
    },
    nextGrid:{
        border: 'solid 1px black',
        borderWidth: '1px 0 0 1px',
        width: 413,
        height: 120,
    },
    gridEntry:{
        height: 40,
        width: 206,
        border: 'solid 1px black',
        borderWidth: '0 1px 1px 0',
        display: 'inline-block',
        textAlign: 'center',
        lineHeight: '42px',
        color: 'white',
        background: '#53BE16'
    },
    gridWith:{
        height: 40,
        width: 412,
        border: 'solid 1px black',
        borderWidth: '0 1px 1px 0',
        display: 'inline-block',
        textAlign: 'center',
        lineHeight: '42px',
        color: 'white',
        background: '#53BE16'
    }
}

class Friends extends React.Component {
//   constructor(props) {
 
//    super(props)
//   }

  render() {
    return (
      <div style={styles.friendsContainer}>
        <div style={styles.header}>What Friends are Doing</div>
        <div style={styles.userMain}>
            <div style={styles.avatar}>Avatar</div>
            <div style={styles.nextBlock}>    
                <div style={styles.nextLabel}><button style={styles.arrowButton}><i className="fa fa-arrow-left" aria-hidden="true"></i></button><span>Friends Name</span><button style={styles.arrowButton}><i className="fa fa-arrow-right" aria-hidden="true"></i></button></div>
                <div style={styles.nextGrid}>
                    <div style={styles.gridEntry}>Date</div>
                    <div style={styles.gridEntry}>Location</div>
                    <div style={styles.gridEntry}>Hour AM/PM</div>
                    <div style={styles.gridEntry}>Activity</div>
                    <div style={styles.gridWith}>No Partner Yet, Click to Join!</div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Friends