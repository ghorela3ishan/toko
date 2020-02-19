import { ACTIONS } from "./actionTypes";
const initialState = {
        nextPage: 0,
        data: []
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
        default:
            return state;
    }
}