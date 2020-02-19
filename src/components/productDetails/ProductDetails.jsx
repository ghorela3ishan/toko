import React, { Component} from "react";
import "./ProductDetails.scss";
import ProductCard from "../productCard/ProductCard";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchProductDetails, clearProducDetails } from "../../services/products/actions";

class ProductDetails extends Component {
    componentDidMount() {
        this.props.fetchProductDetails(this.props.match.params.id);
    }

    componentWillMount() {
        this.props.clearProducDetails();
    }

    getRatingHtml = (rating) => {
        let str = ""
        for (let i = 0; i < rating; i++) {
            str =  str + "★"
        }
        return str;
    }

    render() {
        let { description, id, img, name, price, rating } = this.props.details;
        let ratingHtml = this.getRatingHtml(rating)
        return(
            <div className="productDetailsSec">
                <div className="imgCont">
                    <img src={img} alt="Product image" className="productImage"/>
                </div>
                <div className="infoCont">
                    <p><span>Product Name: </span><span>{name}</span></p>
                    <p><span>Rating: </span><span>{ratingHtml}</span></p>
                    <p><span>Price: </span><span>{price}</span></p>
                    <p><span>Description: </span>{description}<span></span></p>
                </div>
            </div>
        );
    }
}

 const mapStateToProps = (state) => {
    return {
        details: state.products.productDetails,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchProductDetails, clearProducDetails }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);