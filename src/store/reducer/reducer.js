import { ADD_FAVORITE, DELETE_FAVORITE, GET_RESULT } from "../actions/constants"
import { result } from "../../utils/results"

const initialState = {
    history: [],
    allHistory: [], 
    result : 0
}

function rootReducer(state = initialState, action) {
    switch (action.type) {

        case GET_RESULT:
            let [number, from, to] = action.payload
            let aux = result(number, from, to)
            return{
                ...state,
                result: aux
            }

        case ADD_FAVORITE:
            return{
                ...state,
                history: [...state.history, action.payload],
                allHistory: [...state.history, action.payload]
            }

        case DELETE_FAVORITE:
            return{
                ...state,
                history: state.history.filter(f => f.id !== action.payload)
            }
        
        default:
            return state
    }
}

export default rootReducer