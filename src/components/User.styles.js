const styles ={
  UserContainer:{
    width: 1300,
    display: 'flex',
    background: 'linear-gradient( to bottom right, #56CCF2 , #2F80ED )'
  },
  AvailabilityContainer:{
    width: 1300,
  },
  bigPicture:{
    width: 630,
    marginLeft: 10,
    marginTop: 10,
    background: 'white',
    height: 600,
  },
  top:{
    width: 650,
    padding: 10,
    display: 'flex',
  },
  bottom:{
    width: 650,
    padding: 10,
    display: 'flex',
  },
  right:{
    width: 310,
    display: 'inline-block',
    marginLeft: 10
  },
  left:{
    width: 310,
    display: 'inline-block'
  },
  avatar:{
    width: 310,
    height: 300,
    background: 'white',
    border: 'solid 1px black',
    borderRadius: 3
  },
  avatarImg:{
    height: 300,
    width: 310,
  },
  lineInput:{
    marginTop: 10,
    width: 250,
    height: 40,
    border: 'solid 1px black',
    textIndent: 5,
    borderRadius: 3
  },
  lineInput2:{
    marginTop: 10,
    width: 310,
    height: 40,
    border: 'solid 1px black',
    textIndent: 5,
    borderRadius: 3
  },
  ageInput:{
    marginTop: 14,
    width: 150,
    height: 40,
    border: 'solid 1px black',
    textIndent: 5,
    borderRadius: 3
  },
  gender:{
    marginTop: 14,
    marginLeft: 10,
    width: 150,
    height: 40,
    border: 'solid 1px black'
  },
  createUser:{
    marginTop: 10,
    marginLeft: 10,
    width: 150,
    height: 38,
    borderRadius: 5,
    border: 'solid 1px black',
    background: '#53BE16',
    color: 'white',
    fontSize: 16
  },
  privacy:{
    marginTop: 10,
    width: 310,
    height: 38,
    border: 'solid 1px black'
  },
  privacy2:{
    marginTop: 10,
    width: 150,
    height: 38,
    border: 'solid 1px black'
  },
  select:{
    marginTop: 10,
    width: 310,
    height: 38,
    border: 'solid 1px black'
  },
  timeLabel:{
    width: 60,
    height: 38,
    fontSize: 24,
    color: 'white',
    padding: '0 2px 0 0 ',
    textAlign: 'right',
    display: 'inline-block'
  },
  time:{
    marginTop: 10,
    width: 180,
    height: 38,
    border: 'solid 1px black'
  },
  AmPm:{
    marginTop: 10,
    width: 68,
    height: 38,
    border: 'solid 1px black'
  },
  activities:{
    width: 310,
    height: 132,
    border: 'solid 1px black',
    borderRadius: 3,
    overflow: 'hidden',
  },
  activitiesTextArea:{
    padding: 5,
    width: 308,
    height: 102,
    border: 'solid 1px black',
    borderWidth: '0 0 1px 0'
  },
  infoBlock:{
    marginTop: 10,
    width: 310,
    height: 112,
    border: 'solid 1px black',
    overflow: 'hidden',
    borderRadius: 3
  },
  textArea:{
    padding: 5,
    width:308,
    height: 82,
    border: 'solid 1px black',
    borderWidth: '0 0 1px 0'
  },
  buttonBar:{
    marginTop: -6,
    display: 'flex',
    justifyContent: 'space-between',
    height:30,
    width:308,
    background: '#F2F2F2',
    lineHeight: '32px',
    textIndent: 6
  },
  editInfo:{
    height: 20,
    width: 60,
    background: '#53BE16',
    color: 'white',
    marginTop: 6,
    marginRight: 6,
    border: 'solid 1px black',
    borderRadius: 3,
    fontSize: 15,
    lineHeight: '14px'
  },
  editInfo2:{
    height: 30,
    width: 50,
    background: '#53BE16',
    color: 'white',
    marginRight: 10,
    border: 'solid 1px black',
    borderRadius: 3,
    fontSize: 15,
    lineHeight: '14px',
    
  },
  availabilityHeader:{
      height: 40,
      paddingTop: 10,
      width: 650,
      fontSize: 36,
      color: '#FFFF00',
      textAlign: 'center',
      display: 'block', 
  },
  addAvailability:{
      margin: 'auto',
      height: 40,
      width: 310,
      fontSize: 16,
      background: '#53BE16',
      color: 'white',
      display: 'block',
      border: 'solid 1px black',
      borderRadius: 3
  }
}
export default styles