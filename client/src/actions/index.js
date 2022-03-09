import axios from "axios";

export function getCategories() {
    return async function (dispatch){
        try{
            const info = await axios.get('/categories', {})
            return dispatch({
                type: "GET_CATEGORIES",
                payload: info.data
            })
        }catch(err){
            console.log(err)
        }
    }
}

export function getQuestions(payload){
    return async function (dispatch){
        try {
            const json = await axios.get("/questions/" + payload)
            return dispatch({
                type: "GET_QUESTIONS",
                payload: json.data
            })
        } catch(err){
            console.log(err)
        }
    }
}

export function postRanking(payload){
    return async function (dispatch){
        try {
            const json = await axios.post("/ranking/", payload)
            return dispatch({
                type: "POST_RANKING",
                payload: json.data
            })
        } catch(err){
            console.log(err)
        }
    }
}

export function getRanking(payload){
    return async function (dispatch){
        try {
            const json = await axios.get("/ranking/" + payload)
            return dispatch({
                type: "GET_RANKING",
                payload: json.data
            })
        } catch(err){
            console.log(err)
        }
    }
}