import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container, Row, Col } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    const style = {
      padding: "20px",
    };
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand pb-2" href="#">
          WEB-APP
        </a>
        <span className="d-lg-none ml-auto mr-2">
          <Link to="#" className="mr-1">
            <i className="fas fa-search fa-1x" style={{ color: "#343a40" }}></i>
          </Link>

          <Link to="abvsdf">
            <i
              className="fas fa-shopping-cart fa-1x"
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
            <li className="nav-item active  mr-4">
              <Link className="nav-link" to="/">
                TRANG CHỦ <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item dropdown  mr-4">
              <a
                className="nav-link dropdown-toggle"
                href="http://example.com"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                QUẤN NAM
              </a>
              <div className="dropdown-menu">
                <ul className="list-group list-group-flush pr-5">
                  <h5 className="mx-auto">
                    <Nav.Link href="#home">ÁO SƠ MI</Nav.Link>
                  </h5>
                  <li className="list-group-item">Sơ mi Hàn Quốc</li>
                  <li className="list-group-item">Sơ mi Họa Tiết</li>
                  <li className="list-group-item">Sơ mi Caro</li>
                  <li className="list-group-item">Sơ mi ngắn tay</li>
                  <li className="list-group-item">Sơ mi Denim</li>
                </ul>
                <ul className="list-group list-group-flush pr-5">
                  <h5 className="mx-auto">
                    <Nav.Link href="#home">ÁO THUN</Nav.Link>
                  </h5>
                  <li className="list-group-item">Áo thun Cổ tròn</li>
                  <li className="list-group-item">Áo thun Cổ tim</li>
                  <li className="list-group-item">Áo thun tay dài</li>
                </ul>
                <ul className="list-group list-group-flush pr-5">
                  <h5 className="mx-auto">
                    <Nav.Link href="#home">ÁO SƠ MI</Nav.Link>
                  </h5>
                  <li className="list-group-item">Áo khoác da</li>
                  <li className="list-group-item">Áo khoác dù</li>
                  <li className="list-group-item">Áo khoác nỉ Hàn Quốc</li>
                  <li className="list-group-item">Áo Khoác jeans</li>
                  <li className="list-group-item">Áo khoác kaki</li>
                  <li className="list-group-item">Áo khoác Cardigan</li>
                </ul>
              </div>
            </li>
            <li className="nav-item dropdown mr-4">
              <a
                className="nav-link dropdown-toggle"
                href="http://example.com"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                ÁO NAM
              </a>
              <div className="dropdown-menu">
                <ul className="list-group list-group-flush pr-5">
                  <h5 className="mx-auto">
                    <Nav.Link href="#home">ÁO SƠ MI</Nav.Link>
                  </h5>
                  <li className="list-group-item">Sơ mi Hàn Quốc</li>
                  <li className="list-group-item">Sơ mi Họa Tiết</li>
                  <li className="list-group-item">Sơ mi Caro</li>
                  <li className="list-group-item">Sơ mi ngắn tay</li>
                  <li className="list-group-item">Sơ mi Denim</li>
                </ul>
                <ul className="list-group list-group-flush pr-5">
                  <h5 className="mx-auto">
                    <Nav.Link href="#home">ÁO THUN</Nav.Link>
                  </h5>
                  <li className="list-group-item">Áo thun Cổ tròn</li>
                  <li className="list-group-item">Áo thun Cổ tim</li>
                  <li className="list-group-item">Áo thun tay dài</li>
                </ul>
                <ul className="list-group list-group-flush pr-5">
                  <h5 className="mx-auto">
                    <Nav.Link href="#home">ÁO SƠ MI</Nav.Link>
                  </h5>
                  <li className="list-group-item">Áo khoác da</li>
                  <li className="list-group-item">Áo khoác dù</li>
                  <li className="list-group-item">Áo khoác nỉ Hàn Quốc</li>
                  <li className="list-group-item">Áo Khoác jeans</li>
                  <li className="list-group-item">Áo khoác kaki</li>
                  <li className="list-group-item">Áo khoác Cardigan</li>
                </ul>
              </div>
            </li>
            <li className="nav-item dropdown  mr-4">
              <a
                className="nav-link dropdown-toggle"
                href="http://example.com"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                PHỤ KIỆN
              </a>
              <div className="dropdown-menu ">
                <ul className="list-group-flush pr-5 ">
                  <h5 className="mx-auto">
                    <Nav.Link href="#home">ÁO SƠ MI</Nav.Link>
                  </h5>
                  <li className="list-group-item">Sơ mi Hàn Quốc</li>
                  <li className="list-group-item">Sơ mi Họa Tiết</li>
                  <li className="list-group-item">Sơ mi Caro</li>
                  <li className="list-group-item">Sơ mi ngắn tay</li>
                  <li className="list-group-item">Sơ mi Denim</li>
                </ul>
                <ul className="list-group list-group-flush pr-5">
                  <h5 className="mx-auto">
                    <Nav.Link href="#home">ÁO THUN</Nav.Link>
                  </h5>
                  <li className="list-group-item">Áo thun Cổ tròn</li>
                  <li className="list-group-item">Áo thun Cổ tim</li>
                  <li className="list-group-item">Áo thun tay dài</li>
                </ul>
              </div>
            </li>
            <li className="nav-item  mr-4">
              <a className="nav-link" href="#">
                KHUYỄN MẠI
              </a>
            </li>
            <li className="nav-item  mr-4">
              <Link className="nav-link" to="./dang-nhap">
                ĐĂNG NHẬP
              </Link>
            </li>
            <li className="nav-item mr-5 pr-5">
              <a className="nav-link" href="#">
                ĐĂNG KÝ
              </a>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="#">
                <i className="fas fa-shopping-cart"></i>
              </Link>
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
