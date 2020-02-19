import React, { Component} from "react";
import "./Products.scss";
import ProductCard from "../productCard/ProductCard";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchProducts } from "../../services/products/actions";

class Products extends Component {
    componentDidMount() {
        this.props.fetchProducts(this.props.nextPage);
    }

    handleLoadMore = () => {
        this.props.fetchProducts(this.props.nextPage);
    }

    render() {
        let { data } = this.props;

        return(
            <div className="productsSec">
                <div className="productsCont">
                    {data.length ? data.map((product) => <ProductCard data={product}/> ) : "no data"}
                </div>
                <div><input type="button" value="Load More" onClick={this.handleLoadMore}/></div>
            </div>
        );
    }
}

 const mapStateToProps = (state) => {
    return {
        data: state.products.data,
        nextPage: state.products.nextPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchProducts }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);