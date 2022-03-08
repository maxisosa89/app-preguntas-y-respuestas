const initialState = {
    categories: [],
    questions: []
}

function rootReducer (state= initialState, action) {
    
    switch(action.type) {
        case "GET_CATEGORIES":
            return {
                ...state,
                categories: action.payload
            }
        case "GET_QUESTIONS":
            return {
                ...state,
                questions: action.payload
            }
        default: return state
    }
}

export default rootReducer;