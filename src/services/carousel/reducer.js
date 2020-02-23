import { SET_CAROUSEL_IMAGES } from "./actionTypes";

const initialState = {
    images: []
}

export default function carouselReducer(state = initialState, action) {
    switch(action.type) {
        case SET_CAROUSEL_IMAGES:
            return {
                ...state,
                images: action.data
            }
        default:
            return state;
    }
}