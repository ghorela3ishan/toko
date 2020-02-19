import { ACTIONS } from "./actionTypes";
import gatewayInstance from "../../core/Network/gateway";

function setProducts(productsData) {
    return {
        type: ACTIONS.SET_PRODUCTS,
        data: productsData
    }
}

export function fetchProducts(page) {
    return (dispatch) => {
            gatewayInstance.get(`/products?page=${page}`)
            .then((res)=> {
                dispatch(setProducts(res.data));
            })
    }
}

function setProductDetails(productDetails) {
    return {
        type: ACTIONS.SET_PRODUCT_DETAILS,
        data: productDetails
    }
}

export function fetchProductDetails(id) {
    return (dispatch) => {
        gatewayInstance.get(`/products/${id}`)
        .then(res => {
            dispatch(setProductDetails(res.data))
        })
    }
}

export function clearProducDetails() {
    return {
        type: ACTIONS.CLEAR_PRODUCT_DETAILS
    }
}