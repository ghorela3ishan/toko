import App from "../../App";
import UnknownPath from "../../components/UnknownPath";
import ProductDetails from "../../components/productDetails/ProductDetails";

const routes = [
    {
        exact: true,
        path: "/",
        component: App
    },
    {
        exact: true,
        path: "/product/:id",
        component: ProductDetails
    },
    {
        component: UnknownPath
    }
]

export default routes;