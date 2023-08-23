import {ADD_TO_CART} from '../constants'

const initialState = {
    cartDate:[]
}

export default function cartItems(state = initialState,action){

    switch(action.type){
        case ADD_TO_CART :
            console.warn('reducer...',action)
            return {
                ...state,
                cartDate: action.data
            }
            break
            default:
                return state
    }
}