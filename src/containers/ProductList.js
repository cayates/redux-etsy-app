import React, {Component} from 'react';
import {connect} from 'react-redux';

import {filterProducts} from "../store/actions/actions";
import Product from "../components/Product";
import { bindActionCreators } from 'redux';
// import products from '../data/products';


class ProductList extends Component {

    render() {
        const {products} = this.props;
        return (
            <ul className="ProductList">
            {products.map((productInfo)=>{
                return (
                    <Product
                    key={productInfo.listing_id}
                    {...productInfo}
                    />
                )
            })}
            </ul>
        )
    }
}

const mapStateToProps = function(state) {
    
    let products = state.products;
    console.log("this is the state of my products", products)
    return {
            products: products
        }
}

const mapDispatchToProps = function(dispatch) {
      return bindActionCreators({ filterProducts: filterProducts }, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
