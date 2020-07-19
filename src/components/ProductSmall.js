import React, { Component } from "react";
const style = {
  parent: { display: "flex" },
  productPrice: { fontSize: "16px", color: "#c80204" },
};

export default class ProductSmall extends Component {
  render() {
    return (
      <div style={style.parent} className="mb-2">
        <div className="mr-3">
          <img
            className="img-responsive"
            src="https://4menshop.com/cache/image/77/images/thumbs/2019/05/ao-so-mi-trang-asm1266-10790.png"
            alt=""
          />
        </div>
        <div className="my-auto">
          <p>SẢN PHẨM A</p>
          <span style={style.productPrice}>
            225.000 <em>245.000</em>
          </span>
        </div>
      </div>
    );
  }
}
