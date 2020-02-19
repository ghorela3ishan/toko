import { ACTIONS } from "./actionTypes";
const initialState = {
        nextPage: 0,
        data: [],
        productDetails: {}
}

export default function productsReducer(state = initialState, action) {
    switch(action.type) {
        case ACTIONS.SET_PRODUCTS :
            let data = [...state.data, ...action.data.data];
            return {
                ...state,
                data,
                nextPage: action.data.nextPage
            }
        case ACTIONS.SET_PRODUCT_DETAILS: 
        return {
            ...state,
            productDetails: action.data
        }
        case ACTIONS.CLEAR_PRODUCT_DETAILS: 
        return {
            ...state,
            productDetails: {}
        }
        default:
            return state;
    }
}