import React, { Component } from "react";
import Carousel from "../components/Carousel";
import ListProduct from "../components/ListProduct";
import ShowCategory from "../components/ShowCategory";
import Slick from "../components/Slick";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <div style={{ textAlign: "center" }} className="my-5">
          <h5>
            <strong>SẢN PHẨM HOT NHẤT</strong>
          </h5>
          <p>
            Sản phảm thời trang nam được quan tâm nhiều nhất, trong bộ sưu tập
            thời trang tại shop 4MEN
          </p>
        </div>
        <ListProduct />
        <ShowCategory />
        <div style={{ textAlign: "center" }} className="my-5">
          <h5>
            <strong>SẢN PHẨM MỚI NHẤT</strong>
          </h5>
          <p>
            Danh sách sản phẩm thời trang nam mới nhất được cập nhật trong bộ
            sưu tập thời trang 4MEN
          </p>
        </div>
        <ListProduct />

        <div style={{ textAlign: "center" }} className="my-5">
          <h5>
            <strong>BEST SELLER</strong>
          </h5>
          <p>
            Danh sách sản phẩm thời trang nam mới nhất được cập nhật trong bộ
            sưu tập thời trang 4MEN
          </p>
        </div>
        <Slick />
      </div>
    );
  }
}
