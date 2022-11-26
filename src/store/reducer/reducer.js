import { GET_HISTORY, GET_RESULT } from "../actions/constants"

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
                aux = number * 0.621371
            }
            if(from === 'miles'){
                aux = number * 1.60934
            }
            return{
                ...state,
                result: aux
            }
        
        default:
            return state
    }
}

export default rootReducer