import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NoMatch extends Component {
  render() {
    return (
      <div className="container">
        <h1 style={{ textAlign: "center" }} className="my-5">
          Địa chỉ truy cập không tồn tại {`->`}{" "}
          <Link className="text-danger" to="/">
            {" "}
            Quay về trang chủ
          </Link>
        </h1>
        <div>
          <img
            alt="not-found"
            src="https://www.totolink.vn/public/uploads/img_post/truy-tim-nguyen-nhan-va-cach-sua-chua-loi-tra-cuu-404-not-found-1.jpg"
          />
        </div>
      </div>
    );
  }
}

export default NoMatch;
