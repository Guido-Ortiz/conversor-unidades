import { ADD_FAVORITE, DELETE_FAVORITE, GET_HISTORY, GET_RESULT } from "./constants";

export function getHistory(payload){
    return{
        type: GET_HISTORY,
        payload
    }
}

export function getResult(payload){
    return{
        type: GET_RESULT,
        payload
    }
}

export function addFavorite(payload){
    return{
        type: ADD_FAVORITE,
        payload
    }
}

export function deleteFavorite(payload){
    return{
        type: DELETE_FAVORITE,
        payload
    }
}