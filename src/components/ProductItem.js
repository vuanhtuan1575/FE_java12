import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProductItem.css";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";
import { addToCartFunc } from "../actions";
import ProductDetail from "./ProductDetail";
import { numberToVnd } from "../common";

class ProductItem extends Component {
  state = {
    modelShow: false,
  };
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

  popupAddToCart = (product) => {
    this.props.addToCartFunc(product, this.state.buyPackage);
    this.notify(product);
  };
  handleShowModel = () => {
    // this.props.resetActionFunc();
    // if (this.state.modelShow === true) this.props.findAllProductProcess();
    this.setState({ ...this.state, modelShow: !this.state.modelShow });
  };
  /**
   * Model Add product
   * @param {*} props
   */
  modelAddProduct = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.product.name}
          </Modal.Title>
        </Modal.Header>

        <div className="card">
          <ProductDetail productNameSeo={this.props.product.nameSeo} />
        </div>

        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  };

  render() {
    const { product } = this.props;

    return (
      <>
        <this.modelAddProduct
          show={this.state.modelShow}
          onHide={() => this.handleShowModel()}
        />
        {product && (
          <div className="card mx-auto product-responsive ">
            <div className="Product-signle-parent">
              <img
                src={product.jsonImg && product.jsonImg[0]}
                className="card-img-top"
                alt="..."
                onClick={this.handleShowModel}
              />
              <div className="Product-signle-child ">
                <div>
                  <i
                    className="fas fa-shopping-basket fa-2x"
                    onClick={() => this.popupAddToCart(product)}
                  ></i>
                </div>
                <div>
                  <i className="far fa-heart fa-2x"></i>
                </div>
              </div>
            </div>
            <Link to={`san-pham?sp=${product.nameSeo}`}>
              <div className="card-body text-body">
                <p className="card-text">{product.name}</p>
                <div className="ps-price product-attr">
                  <span
                    className="product-price"
                    style={{
                      color: "#d6644a",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {product && numberToVnd(product.nowPrice)}
                  </span>
                  <em
                    className="ml-1"
                    style={{ textDecoration: "line-through", fontSize: "12px" }}
                  >
                    <span> {product && numberToVnd(product.oldPrice)}</span>
                  </em>
                </div>
              </div>
            </Link>
          </div>
        )}
      </>
    );
  }
}

ProductItem.defaultProps = {
  statusAction: -1,
};
//tao component ProductCard, dua component vao list

const mapStateToProps = (state) => ({
  statusAction: state.statusAction,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      addToCartFunc,
    },
    dispatch
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
