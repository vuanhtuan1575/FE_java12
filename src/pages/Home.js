import React, { Component } from "react";
import Carousel from "../components/Carousel";
import ListProduct from "../components/ListProduct";
import ShowCategory from "../components/ShowCategory";
import Slick from "../components/Slick";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { findAllProductProcess, findByProductByState } from "../actions";

class Home extends Component {
  componentDidMount() {
    this.props.findByProductByState(0); // san pham hot
    this.props.findByProductByState(1); // san pham mua nhieu
    this.props.findByProductByState(2); // san pham moi
  }
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
        <ListProduct products={this.props.hotProducts} />
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
        <ListProduct products={this.props.newProducts} />

        <div style={{ textAlign: "center" }} className="my-5">
          <h5>
            <strong>BEST SELLER</strong>
          </h5>
          <p>
            Danh sách sản phẩm thời trang nam mới nhất được cập nhật trong bộ
            sưu tập thời trang 4MEN
          </p>
        </div>
        <Slick products={this.props.buyMoreProducts} />
      </div>
    );
  }
}
Home.defaultProps = {
  statusAction: -1,
  hotProducts: [],
  buyMoreProducts: [],

  newProducts: [],
};
//tao component ProductCard, dua component vao list

const mapStateToProps = (state) => ({
  statusAction: state.statusAction,
  hotProducts: state.hotProducts,
  buyMoreProducts: state.buyMoreProducts,

  newProducts: state.newProducts,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      findAllProductProcess,
      findByProductByState,
    },
    dispatch
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
