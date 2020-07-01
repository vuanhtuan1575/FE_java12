import React, { Component } from "react";
import ProductItem from "./ProductItem";
import "./ListProduct.css";

export default class ListProduct extends Component {
  render() {
    return (
      <div>
        <div className="d-md-none">
          <div className="container grid-container ">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>
        <div className="d-none d-md-block">
          <div className="container grid-container-lg ">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>
      </div>
    );
  }
}
