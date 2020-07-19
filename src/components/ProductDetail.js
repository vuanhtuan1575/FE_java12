import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductDetail.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { findSignleProductByNameSeo, addToCartFunc } from "../actions";
import ReactHtmlParser from "react-html-parser";
import { numberToVnd } from "../common";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#343a40",
        right: "0%",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}
toast.configure();
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#343a40",
        left: "0%",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}
class ProductDetail extends Component {
  state = {
    buyPackage: {
      size: "s",
      quanty: 1,
    },

    active: "DESCRIPTION",
    screenWidth: null,
    indexImg: 0,
  };
  componentDidMount() {
    const queryString = require("query-string");

    const parsed = queryString.parse(window.location.search);
    if (parsed.sp) {
      this.props.findSignleProductByNameSeo(parsed.sp);
      window.scrollTo(0, 0);
    } else this.props.findSignleProductByNameSeo(this.props.productNameSeo);
  }
  customToast = (product) => {
    return (
      <div>
        {product && (
          <img
            className="rounded img-fluid"
            style={{ width: "36px", height: "36px" }}
            src={product.jsonImg[0]}
            alt={product.name}
          />
        )}
        Đã thêm vào giỏ hàng <i className="fas fa-check"> </i>
      </div>
    );
  };

  notify = (product) =>
    toast(this.customToast(product), {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });

  changeView = (keyView) => {
    this.setState({ ...this.state, active: keyView });
  };
  handleChange = (evt) => {
    const value = evt.target.value;
    this.setState({
      ...this.state,
      buyPackage: { ...this.state.buyPackage, [evt.target.name]: value },
    });
  };

  popupAddToCart = (product) => {
    this.props.addToCartFunc(product, this.state.buyPackage);
    this.notify(product);
  };

  handleSubmit = (event) => {
    alert("Your favorite flavor is: " + this.state.size);
    event.preventDefault();
  };

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,

      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
      ],
    };
    const { product } = this.props;
    console.log(this.state);
    return (
      <div className="container">
        <div className="gird-container my-5">
          <div className="image-show">
            <div className="owl-item mb-3">
              <img
                src={product && product.jsonImg[this.state.indexImg]}
                alt="Áo Sơ Mi Trắng ASM1266"
                className="img-responsive"
              />
            </div>

            <Slider {...settings}>
              {product &&
                product.jsonImg.map((item, index) => (
                  <div className="px-1">
                    <img
                      src={item}
                      alt="Áo Sơ Mi Trắng ASM1266"
                      className="img-responsive"
                      onClick={() =>
                        this.setState({ ...this.state, indexImg: index })
                      }
                    />
                  </div>
                ))}
            </Slider>
          </div>
          <div className="product-single">
            <div className="ps-header">
              <h1>{product && product.name}</h1>

              <div className="ps-price product-attr">
                <span className="product-price" style={{ color: "#d6644a" }}>
                  {product && numberToVnd(product.nowPrice)}
                </span>{" "}
                <em className="ml-3" style={{ textDecoration: "line-through" }}>
                  <span> {product && numberToVnd(product.oldPrice)}</span>
                </em>
              </div>
            </div>
            <div className="ps-stock product-attr">
              <span>Tình trạng: </span> Còn hàng
            </div>
            <div className="sep"></div>
            <p>
              <span>Danh mục: </span>
              <Link
                style={{ color: "#d6644a" }}
                to={`/quan-ao?shop=${product && product.categoryNameSeo}`}
                title={product && product.categoryName}
              >
                {product && product.categoryName}
              </Link>
            </p>
            {product && (
              <>
                <span>Điểm nổi bật:</span>
                <div> {ReactHtmlParser(product.description)}</div>
              </>
            )}

            <div className="gird-select">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <label
                    className="input-group-text"
                    htmlFor="inputGroupSelect01"
                  >
                    Size*
                  </label>
                </div>
                <select
                  className="custom-select"
                  id="inputGroupSelect01"
                  name="size"
                  value={this.state.size}
                  onChange={this.handleChange}
                >
                  <option value="S">S</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <label
                    className="input-group-text"
                    htmlFor="inputGroupSelect01"
                  >
                    Số Lượng*
                  </label>
                </div>
                <select
                  className="custom-select"
                  id="inputGroupSelect01"
                  name="quanty"
                  value={this.state.quanty}
                  onChange={this.handleChange}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
            <div className="sep"></div>
            <button
              type="button"
              id="buyNow"
              rel="10790"
              className="addtobag mr-2"
              onClick={this.handleSubmit}
              style={{ width: "150px" }}
            >
              <i className="fa fa-shopping-cart"></i> Mua hàng
            </button>
            <button
              type="button"
              onClick={() => this.popupAddToCart(product)}
              className="btn addtobag my-auto"
              style={{ width: "150px" }}
            >
              + Thêm vào giỏ
            </button>
          </div>
        </div>
        <div>
          <ul className="nav nav-tabs">
            <li
              className="nav-item"
              onClick={() => this.changeView("DESCRIPTION")}
            >
              <span
                className={`
                  nav-link   ${
                    this.state.active === "DESCRIPTION" ? "active" : ""
                  }
                `}
              >
                MÔ TẢ
              </span>
            </li>

            <li className="nav-item" onClick={() => this.changeView("COMMENT")}>
              <span
                className={`
                nav-link   ${this.state.active === "COMMENT" ? "active" : ""}
              `}
              >
                BÌNH LUẬN
              </span>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/#">
                ĐÁNH GIÁ
              </a>
            </li>
          </ul>

          <div className="">
            {this.state.active === "DESCRIPTION" ? (
              <div className="  ">
                <p>{product && ReactHtmlParser(product.description)}</p>
              </div>
            ) : (
              <div className="">
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
ProductDetail.defaultProps = {
  statusAction: -1,
  product: undefined,
};
//tao component ProductCard, dua component vao list

const mapStateToProps = (state) => ({
  statusAction: state.statusAction,
  product: state.product,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      findSignleProductByNameSeo,
      addToCartFunc,
    },
    dispatch
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
