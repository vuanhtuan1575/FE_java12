import React, { Component } from "react";
import ProductItem from "./ProductItem";
import "./ListProduct.css";

export default class ListProduct extends Component {
  render() {
    const products = this.props.products;
    console.log(products);
    return (
      <div>
        <div className="d-md-none">
          <div className="container grid-container ">
            {products &&
              products.map((item, index) => <ProductItem product={item} />)}
          </div>
        </div>
        <div className="d-none d-md-block">
          <div className="container grid-container-lg ">
            {products &&
              products.map((item, index) => <ProductItem product={item} />)}
          </div>
        </div>
      </div>
    );
  }
}
