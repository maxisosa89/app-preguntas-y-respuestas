import axios from "axios";

export function getCategories() {
    return async function (dispatch){
        try{
            const info = await axios.get('http://localhost:3001/categories', {})
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
            const json = await axios.get("http://localhost:3001/questions/" + payload)
            return dispatch({
                type: "GET_QUESTIONS",
                payload: json.data
            })
        } catch(err){
            console.log(err)
        }
    }
}