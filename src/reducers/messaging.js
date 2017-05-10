const initialState = {
    messages: [], userToAdd: "", dbUsers:[], dbAvail: [], currentUserId:1, parks:[]
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
        case 'ADD_USER':
            return {...state, userToAdd: action.user}
        default:
            return state
    }
}