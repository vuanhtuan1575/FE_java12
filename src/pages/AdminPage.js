import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { logOut, findAllCategoryFunc } from "../actions";
import ListProductAdmin from "../components/admin/ListProductAdmin";
import ListCategoryAdmin from "../components/admin/ListCategoryAdmin";
import ListPostsAdmin from "../components/admin/ListPostsAdmin";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { checkCookie } from "../common";
import { Modal, Button } from "react-bootstrap";
class AdminPage extends Component {
  state = {
    contentWrapper: "DEFAULT",
    redirect: false,
  };
  handleLogout = () => {
    this.props.logOut();
    this.setState({ ...this.state, redirect: true });
  };
  componentDidMount() {
    this.props.findAllCategoryFunc();
  }

  handleView = (view) => {
    // if (view === "VIEWCATEGORY") this.props.findAllCategoryFunc();
    this.setState({ ...this.state, contentWrapper: view });
  };
  handleClose = (isRedirect) => {
    this.setState({ ...this.state, redirect: isRedirect });
  };
  render() {
    let isCookieToken = !checkCookie("token");
    console.log(this.state);
    if (this.state.redirect) {
      return <Redirect to="/dang-nhap" />;
    } else if (isCookieToken) {
      return (
        <div>
          <Modal show={isCookieToken}>
            <Modal.Header closeButton>
              <Modal.Title>Chưa đăng nhập</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, Bạn chưa đăng nhập</Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => this.handleClose(isCookieToken)}
              >
                Bấm vào đây để đăng nhập
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    } else
      return (
        <div className="container-scroller">
          {/* // <!-- partial:partials/_navbar.html --> */}
          <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="navbar-brand-wrapper d-flex justify-content-center">
              <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
                <a className="navbar-brand brand-logo" href="index.html">
                  (^_^)
                </a>
                <a className="navbar-brand brand-logo-mini" href="index.html">
                  <img src="images/logo-mini.svg" alt="logo" />
                </a>
                <button
                  className="navbar-toggler navbar-toggler align-self-center"
                  type="button"
                  data-toggle="minimize"
                >
                  <span className="mdi mdi-sort-variant"></span>
                </button>
              </div>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
              <ul className="navbar-nav mr-lg-4 w-100">
                <li className="nav-item nav-search d-none d-lg-block w-100">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="search">
                        <i className="mdi mdi-magnify"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search now"
                      aria-label="search"
                      aria-describedby="search"
                    />
                  </div>
                </li>
              </ul>
              <ul className="navbar-nav navbar-nav-right">
                <li className="nav-item dropdown mr-1">
                  <a
                    className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center"
                    id="messageDropdown"
                    href="/#"
                    data-toggle="dropdown"
                  >
                    <i className="mdi mdi-message-text mx-0"></i>
                    <span className="count"></span>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right navbar-dropdown"
                    aria-labelledby="messageDropdown"
                  >
                    <p className="mb-0 font-weight-normal float-left dropdown-header">
                      Messages
                    </p>
                    <a className="dropdown-item" href="/#">
                      <div className="item-thumbnail">
                        <img
                          src="images/faces/face4.jpg"
                          alt="an"
                          className="profile-pic"
                        />
                      </div>
                      <div className="item-content flex-grow">
                        <h6 className="ellipsis font-weight-normal">
                          David Grey
                        </h6>
                        <p className="font-weight-light small-text text-muted mb-0">
                          The meeting is cancelled
                        </p>
                      </div>
                    </a>
                    <a className="dropdown-item" href="/#">
                      <div className="item-thumbnail">
                        <img
                          src="images/faces/face2.jpg"
                          alt="imge"
                          className="profile-pic"
                        />
                      </div>
                      <div className="item-content flex-grow">
                        <h6 className="ellipsis font-weight-normal">
                          Tim Cook
                        </h6>
                        <p className="font-weight-light small-text text-muted mb-0">
                          New product launch
                        </p>
                      </div>
                    </a>
                    <a className="dropdown-item" href="/#">
                      <div className="item-thumbnail">
                        <img
                          src="images/faces/face3.jpg"
                          alt=""
                          className="profile-pic"
                        />
                      </div>
                      <div className="item-content flex-grow">
                        <h6 className="ellipsis font-weight-normal">
                          {" "}
                          Johnson
                        </h6>
                        <p className="font-weight-light small-text text-muted mb-0">
                          Upcoming board meeting
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown mr-4">
                  <a
                    className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center notification-dropdown"
                    id="notificationDropdown"
                    href="/#"
                    data-toggle="dropdown"
                  >
                    <i className="mdi mdi-bell mx-0"></i>
                    <span className="count"></span>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right navbar-dropdown"
                    aria-labelledby="notificationDropdown"
                  >
                    <p className="mb-0 font-weight-normal float-left dropdown-header">
                      Notifications
                    </p>
                    <a className="dropdown-item" href="/#">
                      <div className="item-thumbnail">
                        <div className="item-icon bg-success">
                          <i className="mdi mdi-information mx-0"></i>
                        </div>
                      </div>
                      <div className="item-content">
                        <h6 className="font-weight-normal">
                          Application Error
                        </h6>
                        <p className="font-weight-light small-text mb-0 text-muted">
                          Just now
                        </p>
                      </div>
                    </a>
                    <a className="dropdown-item" href="/#">
                      <div className="item-thumbnail">
                        <div className="item-icon bg-warning">
                          <i className="mdi mdi-settings mx-0"></i>
                        </div>
                      </div>
                      <div className="item-content">
                        <h6 className="font-weight-normal">Settings</h6>
                        <p className="font-weight-light small-text mb-0 text-muted">
                          Private message
                        </p>
                      </div>
                    </a>
                    <a className="dropdown-item" href="/#">
                      <div className="item-thumbnail">
                        <div className="item-icon bg-info">
                          <i className="mdi mdi-account-box mx-0"></i>
                        </div>
                      </div>
                      <div className="item-content">
                        <h6 className="font-weight-normal">
                          New user registration
                        </h6>
                        <p className="font-weight-light small-text mb-0 text-muted">
                          2 days ago
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li className="nav-item nav-profile dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/#"
                    data-toggle="dropdown"
                    id="profileDropdown"
                  >
                    <img src="images/faces/face5.jpg" alt="profile" />
                    <span className="nav-profile-name">Louis Barnett</span>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right navbar-dropdown"
                    aria-labelledby="profileDropdown"
                  >
                    <a className="dropdown-item" href="/#">
                      <i className="mdi mdi-settings text-primary"></i>
                      Settings
                    </a>
                    <a
                      className="dropdown-item"
                      onClick={this.handleLogout}
                      href="/#"
                    >
                      <i className="mdi mdi-logout text-primary"></i>
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
              <button
                className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                type="button"
                data-toggle="offcanvas"
              >
                <span className="mdi mdi-menu"></span>
              </button>
            </div>
          </nav>
          {/* <!-- partial --> */}
          <div className="container-fluid page-body-wrapper">
            {/* <!-- partial:partials/_sidebar.html --> */}
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                    <i className="mdi mdi-home menu-icon"></i>
                    <span className="menu-title">Dashboard</span>
                  </a>
                </li>

                <li
                  className="nav-item"
                  onClick={() => this.handleView("VIEWPRODUCT")}
                >
                  <a className="nav-link" href="#Thang">
                    <i className="mdi mdi-view-headline menu-icon"></i>
                    <span className="menu-title">Danh sách sản phẩm</span>
                  </a>
                </li>
                <li
                  className="nav-item"
                  onClick={() => this.handleView("VIEWCATEGORY")}
                >
                  <a className="nav-link" href="#sg">
                    <i className="mdi mdi-chart-pie menu-icon"></i>
                    <span className="menu-title">Danh sách loại sản phẩm</span>
                  </a>
                </li>
                <li
                  className="nav-item"
                  onClick={() => this.handleView("VIEWPOSTS")}
                >
                  <a className="nav-link" href="!#">
                    <i className="mdi mdi-grid-large menu-icon"></i>
                    <span className="menu-title">DANH SÁCH BÀI VIẾT</span>
                  </a>
                </li>
              </ul>
            </nav>
            {/* <!-- partial --> */}
            <div className="main-panel">
              <div className="content-wrapper">
                {this.state.contentWrapper === "VIEWPRODUCT" && (
                  <ListProductAdmin categorys={this.props.categorys} />
                )}
                {this.state.contentWrapper === "VIEWCATEGORY" && (
                  <ListCategoryAdmin categorys={this.props.categorys} />
                )}
                {this.state.contentWrapper === "VIEWPOSTS" && (
                  <ListPostsAdmin />
                )}
              </div>
              {/* <!-- content-wrapper ends --> */}
              {/* <!-- partial:partials/_footer.html --> */}
              <footer className="footer">
                <div className="d-sm-flex justify-content-center justify-content-sm-between">
                  <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                    Copyright © 2018
                    <a
                      href="https://www.bootstrapdash.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Bootstrapdash
                    </a>
                    . All rights reserved.
                  </span>
                  <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                    Hand-crafted & made with{" "}
                    <i className="mdi mdi-heart text-danger"></i>
                  </span>
                </div>
              </footer>
              {/* <!-- partial --> */}
            </div>
            {/* <!-- main-panel ends --> */}
          </div>
          {/* <!-- page-body-wrapper ends --> */}
        </div>
      );
  }
}
AdminPage.defaultProps = { categorys: [] };

const mapStateToProps = (state) => ({
  categorys: state.categorys,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      logOut,
      findAllCategoryFunc,
    },
    dispatch
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
