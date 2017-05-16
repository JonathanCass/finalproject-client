const initialState = {

    messages: [], userToAdd: "", dbUsers:[], dbAvail: [], currentUserId: 1, parks:[], currentUserMatches: [], events:[], activityIds:[], activities:[],
    friends:[],

}

export default function messageReducer(state=initialState, action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {...state, messages: [...state.messages, action.message]}
        case 'GET_USERS':
            return {...state, dbUsers: action.dbUsers }
        case 'GET_AVAIL':
            return {...state, dbAvail: action.dbAvail }
        case 'GET_PARKS':
            return{...state, parks: action.parks}
        case 'GET_EVENTS':
            return{...state, events: action.events}
        case 'GET_ACTIVITYIDS':
            return{...state, activityIds: action.activityIds}
        case 'GET_PARK_ACTIVITIES':
            return{...state, activities: action.activities}
        case 'GET_FRIENDS':
             return{...state, friends: action.friends}
        case 'ADD_USER':
            return {...state, userToAdd: action.user}
        case 'ADD_MATCH':
            return {...state, currentUserMatches: [...state.currentUserMatches, action.addMatch] }
         case 'ADD_AVAILABILITY':
            return {...state, currentUserMatches: [...state.currentUserMatches, action.addMatch] }
        default:
        
            return state
    }
}