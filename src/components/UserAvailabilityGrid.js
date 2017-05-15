import React from 'react'
import {getAvail} from '../api/messaging'
import {connect} from 'react-redux'

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
        border: 'solid 1px transparent',
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
        textAlign: 'center',
             textTransform: 'capitalize'
    },
    removeEntry:{
        width: 40,
        height: 40,
        display: 'inline-block',
        background: 'transparent',
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
    },
    gridHeader:{
        height: 40,
        paddingTop: 10,
        width: 630,
        fontSize: 32,
        color: '#FFFF00',
        textAlign: 'center',
        display: 'block',
        marginBottom: 10,
        fontFamily:'Verdana'
    },
    displayNone:{
        display: 'none'
    },
    delete:{
        width:36,
        height:36,
        position: 'relative',
        top: 8
    }
  
}
class UserAvailabilityGrid extends React.Component {
//    constructor(props) {
 
//     super(props)
//    }
  componentWillMount(){
  	getAvail()
  }
  renderGrid(){
    //   console.log(' uaGrid this.props',this.props)
      console.log( ' this.props.availabilityArray ',this.props.availabilityArray )
    if(this.props.availabilityArray) {
        return (
            this.props.availabilityArray.map(entry=>(
            <div style={styles.grid} key={Math.random()}>
                <div style={ Number(this.props.userid) === Number(entry.user_id) ? styles.gridBox : styles.displayNone}>{entry.quadrant }</div>
                <div style={ Number(this.props.userid) === Number(entry.user_id) ? styles.gridBox : styles.displayNone}>{entry.day_of_week}</div>
                <div style={ Number(this.props.userid) === Number(entry.user_id) ? styles.gridBox : styles.displayNone}>{entry.from_num + ' ' + entry.from_suffix}</div>
                <div style={ Number(this.props.userid) === Number(entry.user_id) ? styles.gridBox : styles.displayNone}>{entry.to_num + ' ' + entry.to_suffix}</div>
                <div style={ Number(this.props.userid) === Number(entry.user_id) && Number(this.props.userid) === Number(this.props.currentUserID) ? styles.removeEntry : styles.displayNone }><img alt={"no error"} style={styles.delete} src='http://www.freeiconspng.com/uploads/red-delete-button-png-5.png'/></div>
            </div>	
		))
        )
    }else {
        return (
            <span> Loading Props. </span>
        )
    }
  }
  render() {
    return (
      <div style={styles.UAGridContainer}>
        <div style={styles.gridHeader}>Currently Available For</div>  
        <div style={styles.gridLabel}>City Section</div>
        <div style={styles.gridLabel}>Day of Week</div>
        <div style={styles.gridLabel}>From</div>
        <div style={styles.gridLabel}>To</div>
       
       { this.renderGrid() }
      </div>
    )
  }
}

function mapStateToProps(appState){
	return { currentUserID : appState.currentUserId, dbAvail : appState.dbAvail}
}

export default connect(mapStateToProps)(UserAvailabilityGrid)