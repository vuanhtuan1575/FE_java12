import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import {
  findAllCategoryFunc,
  deleteItemCart,
  inDeCreaseFunc,
  findAllProductContainName,
} from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./Header.css";
import { Link } from "react-router-dom";
import { numberToVnd } from "../common";

class Header extends Component {
  componentDidMount() {
    this.props.findAllCategoryFunc();
  }
  render() {
    if (
      this.props.location.pathname === "/dang-nhap" ||
      this.props.location.pathname === "/admin"
    )
      return null;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <Link className="navbar-brand pb-2" to="/">
          WEB-APP
        </Link>
        <span className="d-lg-none ml-auto mr-2">
          <Link
            to="#HelloWorld"
            className="mr-1"
            onClick={() => alert("Chức năng tìm kiếm chưa sẵn sàng (~_~)")}
          >
            <i className="fas fa-search fa-1x" style={{ color: "#343a40" }}></i>
          </Link>

          <Link to="/thanh-toan">
            <i
              className="fas fa-shopping-bag fa-1x"
              style={{ color: "#343a40" }}
            ></i>
          </Link>
        </span>

        <button
          className="navbar-toggler p-1 border border-white"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active  mr-3">
              <Link className="nav-link" to="/">
                TRANG CHỦ <span className="sr-only">(current)</span>
              </Link>
            </li>

            {this.props.categorys &&
              this.props.categorys.map((item, index) => (
                <div key={index}>
                  {item.onMenu === true && (
                    <li className="nav-item dropdown  mr-3">
                      <a
                        key={index}
                        className="nav-link dropdown-toggle"
                        href="http://example.com"
                        id="navbarDropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {item.name}
                      </a>
                      {item.subCategorys && item.subCategorys.length > 0 && (
                        <div className="dropdown-menu">
                          {item.subCategorys.map((subItem, subIndex) => (
                            <ul
                              className="list-group list-group-flush pr-5"
                              key={subIndex}
                            >
                              <h5 key={subIndex} className="mx-auto">
                                <Nav.Link
                                  href={`/quan-ao?sName=${subItem.name}`}
                                  className="font-weight-bold text-dark"
                                >
                                  {subItem.name}
                                </Nav.Link>
                              </h5>
                              {subItem.subCategorys &&
                                subItem.subCategorys.length > 0 &&
                                subItem.subCategorys.map(
                                  (subSubItem, subSubIndex) => (
                                    <li
                                      key={subSubIndex}
                                      className="list-group-item"
                                    >
                                      <Link
                                        className="text-dark"
                                        to={`/quan-ao?shop=${subSubItem.nameSeo}`}
                                      >
                                        {subSubItem.name}
                                      </Link>
                                    </li>
                                  )
                                )}
                            </ul>
                          ))}
                        </div>
                      )}
                    </li>
                  )}
                </div>
              ))}

            <li className="nav-item  mr-3">
              <Link className="nav-link" to="/thanh-toan">
                THANH TOÁN
              </Link>
            </li>
            <li className="nav-item  mr-3">
              <Link className="nav-link" to="/dang-nhap">
                ĐĂNG NHẬP
              </Link>
            </li>

            <li className="nav-item topcart">
              <Link className="nav-link" to="#">
                <i className="fas fa-shopping-cart"></i>
              </Link>
              <div className="cart-info">
                <small>
                  Có
                  <em className="highlight">
                    <span className="cartTopRightQuantity">
                      {this.props.carts.length}
                    </span>{" "}
                    Sản phẩm{" "}
                  </em>
                  trong giỏ hàng
                </small>
                <div className="cartTopRightContent">
                  {this.props.carts &&
                    this.props.carts.map((item, index) => (
                      <div className="ci-item" key={index}>
                        <img
                          src={item.product.jsonImg[0]}
                          width="77"
                          alt={item.product.nameSeo}
                        />
                        <div className="ci-item-info ml-2">
                          <h5>
                            <Link to={`san-pham?sp=${item.product.nameSeo}`}>
                              {item.product.name}
                            </Link>
                          </h5>
                          <p>
                            {item.quanty} x {numberToVnd(item.product.nowPrice)}
                          </p>
                          <div className="ci-edit">
                            <i
                              className="edit fa fa-trash"
                              onClick={() =>
                                this.props.deleteItemCart(item.product)
                              }
                            ></i>
                            <i
                              className="fas fa-minus-square"
                              onClick={() => {
                                this.props.inDeCreaseFunc(item.product, "DE");
                              }}
                            ></i>
                            <i
                              className="fas fa-plus-square"
                              onClick={() => {
                                this.props.inDeCreaseFunc(item.product, "IN");
                              }}
                            ></i>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div
                  className="ci-total cartTopRightTotal"
                  style={{ display: "block" }}
                >
                  Tổng: {numberToVnd(this.props.totalPrice)}
                </div>
                <div
                  className="cart-btn cartTopRightButtons my-2"
                  style={{ display: "block" }}
                >
                  <Link
                    to="/thanh-toan"
                    title="thanh toan"
                    className="p-2 mb-2 bg-danger text-white"
                    rel="nofollow"
                  >
                    Gửi đơn hàng
                  </Link>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                <i className="fas fa-search"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
Header.defaultProps = {
  categorys: [],
  carts: [],
  totalPrice: undefined,
};
//tao component ProductCard, dua component vao list

const mapStateToProps = (state) => ({
  categorys: state.categorys,
  carts: state.carts,
  totalPrice: state.totalPrice,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      findAllCategoryFunc,
      deleteItemCart,
      inDeCreaseFunc,
      findAllProductContainName,
    },
    dispatch
  ),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
