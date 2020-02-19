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