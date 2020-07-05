import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { postLogin } from "../actions";
import "./Login.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };
  login = () => {};
  handleChange = (evt) => {
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [evt.target.name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.postLogin(this.state.username, this.state.password);
  };
  render() {
    return (
      <div className="global-container">
        <div className="card login-form">
          <div className="card-body">
            <h3 className="card-title text-center">Đăng Nhập</h3>
            <div className="card-text">
              {/* <!--
                <div className="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> --> */}
              <form onSubmit={this.handleSubmit}>
                {/* <!-- to error: add className "has-danger" --> */}
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="username"
                    aria-describedby="emailHelp"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <a href="#" style={{ float: "right", fontSize: "12px" }}>
                    Forgot password?
                  </a>
                  <input
                    type="password"
                    className="form-control form-control-sm"
                    name="password"
                    onChange={this.handleChange}
                  />
                </div>
                <button className="btn btn-primary btn-block">Sign in</button>

                <div className="sign-up">
                  Don't have an account? <a href="#">Create One</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Login.defaultProps = {
  products: [],
  category: "",
  index: -1,
  errMsg: "",
  status: "",
  page: 1,
  query: "",
};
//tao component ProductCard, dua component vao list

const mapStateToProps = (state) => ({
  products: state.products,
  category: state.category,
  index: state.index,
  errMsg: state.errMsg,
  status: state.status,
  page: state.page,
  query: state.query,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ postLogin }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
