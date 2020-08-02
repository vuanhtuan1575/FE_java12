import React, { Component } from "react";
import { numberToVnd } from "../common";
const style = {
  parent: { display: "flex" },
  productPrice: { fontSize: "14px", color: "#c80204" },
};

export default class ProductSmall extends Component {
  render() {
    const { product } = this.props;
    return (
      <div style={style.parent} className="my-2">
        <div className="col-4 col-md-4 mr-1">
          <img className="img-responsive" st src={product.jsonImg[0]} alt="" />
        </div>
        <div className="col-8 col-md-8 my-auto">
          <p style={{ fontSize: "10px" }}>{product && product.name}</p>
          <span style={style.productPrice}>
            {numberToVnd(product.nowPrice)}
            <span
              className="ml-2"
              style={{ textDecoration: "line-through", fontSize: "10px" }}
            >
              {numberToVnd(product.oldPrice)}
            </span>
          </span>
        </div>
      </div>
    );
  }
}
