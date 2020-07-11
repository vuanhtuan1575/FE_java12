import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./Footer.css";

class Footer extends Component {
  render() {
    if (
      this.props.location.pathname === "/dang-nhap" ||
      this.props.location.pathname === "/admin"
    )
      return null;
    else
      return (
        <div className="bg-dark">
          <div className="container footer-gird-container my-5 text-white">
            <div className="my-3">
              <p className="h5">KHÁM PHÁ CỬA HÀNG</p>
              <ul className="select">
                <li>Gì cũng có nè</li>
                <li>Quần hoodie</li>
                <li>Áo Siêu rộng</li>
                <li>Thời trang abc</li>
                <li>Thời trang abc</li>
                <li>Thời trang abc</li>
              </ul>
            </div>
            <div className="my-3">
              <p className="h5">TRỢ GIÚP & TƯ VẤN</p>
              <ul className="select">
                <li>Cách chọn size quần áo</li>
                <li>Chính sách giao hàng</li>
                <li>Chính sách khách VIP</li>
                <li>Câu hỏi thường gặp</li>
              </ul>
            </div>
            <div className="my-3">
              <p className="h5">LIÊN HỆ</p>
              <ul>
                <li>
                  <Link to="/Path">
                    <i className="fab fa-facebook-f"></i>
                    <span> FB:KiemMotIt.1977</span>
                  </Link>
                </li>
                <li>
                  <Link to="/Path">
                    <i className="fas fa-envelope"></i>
                    <span> kiemittien@email.com</span>
                  </Link>
                </li>
                <li>
                  <Link to="/Path">
                    <i className="fas fa-phone-square-alt"></i>
                    <span> 06779949</span>
                  </Link>
                </li>
                <li>
                  <Link to="/Path">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>
                      Đường nhà nghèo, phường làm giàu, Quận Phát triển, Thành
                      Phố Huy Hoàng
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="my-3">
              <p className="h5">ĐỊA CHỈ CỬA HÀNG </p>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  title="location-shop"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5593967991535!2d106.70236301215846!3d10.76840037573554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f80f58eabc9%3A0xac9cc3cf479a924a!2zSOG6p20gVGjhu6cgVGhpw6pt!5e0!3m2!1svi!2s!4v1593339336287!5m2!1svi!2s"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="container gird-container my-5 text-white">
            <p className="text-center">©Hạt Mít Nướng</p>
          </div>
        </div>
      );
  }
}
export default withRouter(Footer);
