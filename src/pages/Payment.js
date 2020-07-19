import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteItemCart, inDeCreaseFunc } from "../actions";
import { getProvin, getDistricByParentCode, numberToVnd } from "../common";
import "./Payment.css";
import Select from "react-select";

class Payment extends Component {
  state = {
    province: undefined,
    distric: undefined,
  };
  handleChangeProvince = (selectedOption) => {
    this.setState({
      ...this.state,
      province: selectedOption,
    });
  };
  handleChangeDistric = (selectedOption) => {
    this.setState({
      ...this.state,
      distric: selectedOption,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-8">
            <h5 style={{ marginTop: "30px", paddingTop: "10px" }}>
              THÔNG TIN ĐƠN HÀNG
            </h5>
            <table className="table table-hover text-center">
              <thead>
                <tr>
                  <th scope="col">Hình</th>
                  <th scope="col">Sản phẩm</th>
                  <th scope="col">SL</th>
                  <th scope="col">Đơn Giá</th>
                  <th scope="col">Size</th>
                </tr>
              </thead>
              <tbody>
                {this.props.carts &&
                  this.props.carts.map((item, index) => (
                    <>
                      <tr key={index}>
                        <td>
                          <img
                            src={item.product.jsonImg[0]}
                            alt={item.product.name}
                          ></img>
                        </td>
                        <td>{item.product.name}</td>
                        <td>
                          {/* <i
                          className="fas fa-minus-square mr-1"
                          onClick={() => {
                            this.props.inDeCreaseFunc(item.product, "DE");
                          }}
                        ></i>
                        {item.quanty}
                        <i
                          className="fas fa-plus-square ml-1"
                          onClick={() => {
                            this.props.inDeCreaseFunc(item.product, "IN");
                          }}
                        ></i> */}
                          <span
                            onClick={() =>
                              this.props.inDeCreaseFunc(item.product, "IN")
                            }
                          >
                            <i className="fas fa-plus"> </i>
                          </span>
                          <span className="mx-2">{item.quanty}</span>
                          <span
                            onClick={() =>
                              this.props.inDeCreaseFunc(item.product, "DE")
                            }
                          >
                            <i className="fas fa-minus"> </i>
                          </span>
                        </td>
                        <td>{item.product.nowPrice}</td>
                        <td>{item.size}</td>
                      </tr>
                      <tr>
                        <td>Tổng</td>
                        <td>
                          {numberToVnd(item.product.nowPrice * item.quanty)}
                        </td>
                        <td>Xóa</td>
                        <td>
                          <i
                            className="edit fa fa-trash"
                            onClick={() =>
                              this.props.deleteItemCart(item.product)
                            }
                          ></i>
                        </td>
                      </tr>
                    </>
                  ))}
              </tbody>
            </table>
            <div>
              <hr />
              <div className="payment-totalprice-container">
                <p>Tổng tiền</p>
                <p>{numberToVnd(this.props.totalPrice)}</p>
              </div>
              <div className="d-flex flex-row-reverse bd-highlight">
                <button form="my-form" type="submit" class="btn btn-danger">
                  Mua hàng
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <form
              id="my-form"
              onSubmit={() => alert("Hiện Admin buồn nên không nghỉ không bán")}
            >
              <h5>THÔNG TIN KHÁCH HÀNG</h5>
              <div class="form-group">
                <label for="exampleInputEmail1">Họ và tên *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="VD: Đào Thắng"
                  required="required"
                  pattern="[A-Za-z]+"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="VD: daothang@email.com"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Số điện thoại*</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="VD: 098999888"
                  required="required"
                  pattern="[0-9]+"
                />
              </div>
              <h5>ĐỊA CHỈ GIAO HÀNG</h5>
              <div className="form-group">
                <label for="exampleInputPassword4">Chọn Tỉnh / Thành Phố</label>
                <Select
                  styles={{
                    // Fixes the overlapping problem of the component
                    menu: (provided) => ({ ...provided, zIndex: 9999 }),
                  }}
                  isSearchable
                  value={this.state.province}
                  onChange={this.handleChangeProvince}
                  options={getProvin()}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword4">Chọn Quận / Huyện</label>
                <Select
                  styles={{
                    // Fixes the overlapping problem of the component
                    menu: (provided) => ({ ...provided, zIndex: 9999 }),
                  }}
                  isSearchable
                  isLoading={false}
                  value={this.state.distric}
                  onChange={this.handleChangeDistric}
                  options={
                    this.state.province &&
                    getDistricByParentCode(this.state.province.code)
                  }
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Tên phường xã*</label>
                <input type="text" className="form-control" />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Số nhà tên đường*</label>
                <input type="text" className="form-control" />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Ghi chú</label>
                <input
                  type="text"
                  className="form-control"
                  style={{ height: "50px" }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Payment.defaultProps = {
  statusAction: -1,
  carts: [],
  totalPrice: 0,
};
//tao component ProductCard, dua component vao list

const mapStateToProps = (state) => ({
  statusAction: state.statusAction,
  carts: state.carts,
  totalPrice: state.totalPrice,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      deleteItemCart,
      inDeCreaseFunc,
    },
    dispatch
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(Payment);
