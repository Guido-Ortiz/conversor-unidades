import { ADD_FAVORITE, GET_HISTORY, GET_RESULT } from "../actions/constants"

const initialState = {
    history: [
    //     {
    //     num: 100,
    //     from: 'miles',
    //     to: 'km',
    //     result: 0
    // },
    // {
    //     num: 100,
    //     from: 'miles',
    //     to: 'km',
    //     result: 0
    // }
], result : 0
}

function rootReducer(state = initialState, action) {
    switch (action.type) {

        case GET_HISTORY:
            return {
                ...state,
                history: action.payload,
            }

        case GET_RESULT:
            // console.log(action.payload)
            let [number, from, to] = action.payload
            let aux

            if(from === 'kms'){
                aux = (number * 0.621371).toFixed(2)
            }
            if(from === 'miles'){
                aux = (number * 1.60934).toFixed(2)
            }
            if(from === 'mts'){
                aux = (number * 3.28084).toFixed(2)
            }
            if(from === 'feets'){
                aux = (number * 0.3048).toFixed(2)
            }
            if(from === 'cms'){
                aux = (number * 0.393701).toFixed(2)
            }
            if(from === 'inches'){
                aux = (number * 2.54).toFixed(2)
            }
            return{
                ...state,
                result: aux
            }

        case ADD_FAVORITE:
            console.log(action.payload)
            return{
                ...state,
                history: [...state.history, action.payload]
            }
        
        default:
            return state
    }
}

export default rootReducer