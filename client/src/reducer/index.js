const initialState = {
    categories: [],
    questions: [],
    ranking: []
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
        case "GET_RANKING":
            return {
                ...state,
                ranking: action.payload
            }
        default: return state
    }
}

export default rootReducer;