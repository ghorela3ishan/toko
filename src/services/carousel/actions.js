import gatewayInstance from "../../core/Network/gateway";
import { SET_CAROUSEL_IMAGES } from "./actionTypes";

function setCarouselImages(data) {
    return {
        type: SET_CAROUSEL_IMAGES,
        data: data
    }
}

export function fetchCarouselImages() {
    return (dispatch) => {
        gatewayInstance.get("/home").
        then(res => {
            dispatch(setCarouselImages(res.data.carousel));
        })
    }
}