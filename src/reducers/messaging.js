const initialState = {
    messages: [], users: ""
}

export default function messageReducer(state=initialState, action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {...state, messages: [...state.messages, action.message]}
        case 'GET_USERS':
            return {...state, users: [...action.users] }
        case 'ADD_USER':
            return {...state, users: action.user}
        default:
            return state
    }
}