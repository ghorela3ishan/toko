import { combineReducers } from "redux";
import productsReducer from "./products/reducer";
import carouselReducer from "./carousel/reducer";

const rootReducer = combineReducers({
    products: productsReducer,
    images: carouselReducer
})

export default rootReducer;