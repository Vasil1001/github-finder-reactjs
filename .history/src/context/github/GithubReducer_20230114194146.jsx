const githubReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case 'SET_LOADING':
            return 
        default:
            return state
    }
}

export default githubReducer