import React, { Component} from "react";
import Carousel from "./components/carousel/Carousel";
import Products from "./components/products/Products"
import "./App.scss";
export default class App extends Component {
    render() {
        return(
            <div className="mainCont">
                <Carousel/>
                <Products/>
            </div>
        );
    }
}
