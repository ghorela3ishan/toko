import React, { Component} from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom";

export default class ProductCard extends Component {
    render() {
        let { img, name, price, id} = this.props.data;
        return(
            <div className="productCont">
                <Link to={ `/product/${id}`} className="productLink">
                    <img src={img} alt="product image"/>
                    <p>{name}</p>
                    <p>Rs: {price}</p>
                </Link>
            </div>
        );
    }
}