import React, { Component } from "react";
import "./ProductItem.css";

class ProductItem extends Component {
  render() {
    return (
      <div className="card mx-auto product-responsive">
        <img
          src="https://4menshop.com/images/thumbs/2018/12/that-lung-nam-den-tl415_small-10407-t.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">Áo sơ mi cho hot boy</p>
          <p>
            <span class="badge badge-danger">219.000đ</span>
          </p>
        </div>
      </div>
    );
  }
}
export default ProductItem;
