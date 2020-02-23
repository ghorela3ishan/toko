import React, { Component} from "react";
import "./Products.scss";
import ProductCard from "../productCard/ProductCard";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchProducts, clearProducts } from "../../services/products/actions";
import Loader from "../loader/Loader";

class Products extends Component {
    componentDidMount() {
        if(!this.props.data.length)
        this.props.fetchProducts(0);
    }
    
    handleLoadMore = () => {
        this.props.fetchProducts(this.props.nextPage);
    }

    render() {
        let { data } = this.props;

        return(
            <div className="productsSec">
                {/* <div className="productsCont">
                    {data.length ? data.map((product) => <ProductCard data={product}/> ) : <Loader/>}
                </div>
                <div><input type="button" className="loadMore" value="Load More" onClick={this.handleLoadMore}/></div> */}
                { data.length  ? 
                    (
                    <>
                        <div className="productsCont">
                            {data.map((product) => <ProductCard data={product}/> )}
                        </div>
                        <div><input type="button" className="loadMore" value="Load More" onClick={this.handleLoadMore}/></div>
                    </>
                    )
                :
                    <Loader/>               
                }
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
    return bindActionCreators({ fetchProducts, clearProducts }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);