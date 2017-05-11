//import io from 'socket.io-client'
import store from '../store'
import axios from 'axios'
//const socket = io.connect('http://localhost:3001')

var api = axios.create({
	baseURL: 'http://10.68.0.58:3001'
	// baseURL:'http://localhost:3001'
})


export function getUsers() {
	api.get('/users').then(res=>{
		//console.log('users in get call', res.data)
		store.dispatch({
			type: 'GET_USERS',
			dbUsers: res.data
		})
	})
}

export function getAvail() {
	api.get('/availability').then(res=>{
		//console.log('availability get', res.data)
		store.dispatch({
			type: 'GET_AVAIL',
			dbAvail: res.data
		})
	})
}	
export function getParks() {
    api.get('/parks').then(res=>{
        //console.log('parks', res.data.parks)
         store.dispatch({
          type: 'GET_PARKS',
          parks: res.data.parks
         })
    })
}


export function getEvents() {
    api.get('/event').then(res=>{
         store.dispatch({
          type: 'GET_EVENTS',
          events: res.data
         })
    })
}
export function getActivityIds() {
    api.get('/activities').then(res=>{
         store.dispatch({
          type: 'GET_ACTIVITYIDS',
          activityIds: res.data
         })
    })
}

export function getParkActivities() {
    api.get('/parks_activities').then(res=>{
//         console.log('parks', res.data.parks_activities)
         store.dispatch({
          type: 'GET_PARK_ACTIVITIES',
         	activities: res.data.parks_activities
         })
    })
}



// export function getUsers() {
// 	console.log('getUSers in Api')
// 	axios.get('http://10.68.0.58:3000/activities').then(res=>{
// 		console.log('res', res)
// 		store.dispatch({
// 			type: 'GET_USERS',
// 			users: res.users
// 		})
		
// 	})
// }

// export function addUser(userObj){
// 	store.dispatch({
// 		type: '_USER',
// 		user: userObj

// 	})
// }
export function addUser(userObj){
	api.post('/users', userObj).then(res=>{
		console.log('post new User', res.data)
	})
}
//This function modeled after User wants to just replace a user's ( specified by id ) friend string

export function addFriend(friendObj){
	api.post('/friends', friendObj).then(res=>{
		console.log('add new Friend', res.data)
	})
}
//req.body.id    is a number the users id
//req.body.friends  is the new string

export function addMatch(addUserID){
	store.dispatch({
          type: 'ADD_MATCH',
          addMatch: addUserID
     })
}
export function postAvailability(availabilityObj){
	console.log("Object being sent", availabilityObj)
	api.post('/availability', availabilityObj).then(res=>{
		console.log('post Availability', res.data)
	})
}

export function postCreateActivity(createActivityObj) {
	console.log('Not created yet', createActivityObj)
	api.post('/activities', createActivityObj).then(res =>{
		console.log('New Activity was created', res.data)
	})
}

// export function addMessage(message) {
//     socket.emit('addMessage', message)
// }

// socket.on('newMessage', function(message){
//     store.dispatch({
//         type: 'ADD_MESSAGE',
//         message
//     })
// })