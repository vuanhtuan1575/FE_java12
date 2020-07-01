import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductDetail.css";

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
export default class ProductDetail extends Component {
  state = {
    size: "s",
    quanty: 1,
    active: "DESCRIPTION",
  };
  changeView = (keyView) => {
    this.setState({ ...this.state, active: keyView });
  };
  handleChange = (evt) => {
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [evt.target.name]: value,
    });
  };

  handleSubmit = (event) => {
    alert("Your favorite flavor is: " + this.state.size);
    event.preventDefault();
  };
  render() {
    var settings = {
      dots: true,
      infinite: false,
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
    return (
      <div className="container">
        <div className="gird-container my-5">
          <div className="image-show">
            <div className="owl-item mb-3">
              <img
                src="https://4menshop.com/images/thumbs/2019/05/ao-so-mi-trang-asm1266-10790-slide-products-5cedf4770a028.png"
                alt="Áo Sơ Mi Trắng ASM1266"
                className="img-responsive"
              />
            </div>

            <Slider {...settings}>
              <div className="px-1">
                <img
                  src="https://4menshop.com/images/thumbs/2019/05/ao-so-mi-trang-asm1266-10790-slide-products-5cedf4770a028.png"
                  alt="Áo Sơ Mi Trắng ASM1266"
                  className="img-responsive"
                />
              </div>
              <div className="px-1">
                <img
                  src="https://4menshop.com/images/thumbs/2019/05/ao-so-mi-trang-asm1266-10790-slide-products-5cedf4770a028.png"
                  alt="Áo Sơ Mi Trắng ASM1266"
                  className="img-responsive"
                />
              </div>
              <div className="px-1">
                <img
                  src="https://4menshop.com/images/thumbs/2019/05/ao-so-mi-trang-asm1266-10790-slide-products-5cedf4770a028.png"
                  alt="Áo Sơ Mi Trắng ASM1266"
                  className="img-responsive"
                />
              </div>
              <div className="px-1">
                <img
                  src="https://4menshop.com/images/thumbs/2019/05/ao-so-mi-trang-asm1266-10790-slide-products-5cedf4770a028.png"
                  alt="Áo Sơ Mi Trắng ASM1266"
                  className="img-responsive"
                />
              </div>
            </Slider>
          </div>
          <div className="product-single">
            <div className="ps-header">
              <h1>ÁO SƠ MI TRẮNG ASM1266</h1>
              <div className="rating-star">
                <div className="ratings">
                  <span className="act fa fa-star" aria-hidden="true"></span>
                  <span className="act fa fa-star" aria-hidden="true"></span>
                  <span className="act fa fa-star" aria-hidden="true"></span>
                  <span className="act fa fa-star" aria-hidden="true"></span>
                  <span className="act fa fa-star" aria-hidden="true"></span>
                </div>
              </div>
              <div className="ps-price product-attr">
                <span>Giá bán: </span>
                <span className="product-price">
                  220.500
                  <em>
                    Giá gốc: <span>245.000</span>
                  </em>
                </span>
              </div>
            </div>
            <div className="ps-stock product-attr">
              <span>Tình trạng: </span> Còn hàng
            </div>
            <div className="sep"></div>
            <p>
              <span>Trọng lượng S/P:</span> 400 Gram
            </p>
            <p>
              <span>Danh mục: </span>
              <a
                href="https://4menshop.com/ao-so-mi-han-quoc.html"
                title="Áo Sơ Mi Hàn Quốc"
              >
                Áo Sơ Mi Hàn Quốc
              </a>
            </p>

            <span>Điểm nổi bật:</span>
            <p>
              Áo sơ mi trắng với thiết kế đơn giản, trẻ trung tôn lên vẻ thanh
              lịch, trưởng thành của phái mạnh.
            </p>
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
              className="addtobag mr-5"
              onClick={this.handleSubmit}
            >
              <i className="fa fa-shopping-cart"></i> Đăng ký mua
            </button>
            <a id="addToCart" rel="nofollow" product="10790">
              + Thêm vào giỏ hàng
            </a>
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
              <a className="nav-link disabled" href="#">
                ĐÁNH GIÁ
              </a>
            </li>
          </ul>

          <div className="">
            {this.state.active === "DESCRIPTION" ? (
              <div className="  ">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
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
