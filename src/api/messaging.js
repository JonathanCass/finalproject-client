//import io from 'socket.io-client'
import store from '../store'
import axios from 'axios'
//const socket = io.connect('http://localhost:3001')

var api = axios.create({
	baseURL: 'http://10.68.0.58:3000'
})


export function getUsers() {
	api.get('/users').then(res=>{
		console.log('users', res.data)
		store.dispatch({
			type: 'GET_USERS',
			users: res.users
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

export function addUser(userObj){
	store.dispatch({
		type: 'ADD_USER',
		user: userObj

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