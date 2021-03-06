import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListProduct from "../components/ListProduct";
import "./Shop.css";
import ProductSmall from "../components/ProductSmall";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  findProductsByCategoryNameSeo,
  findAllProductContainName,
  findByProductByState,
} from "../actions";
class Shop extends Component {
  state = { location: undefined };
  componentDidMount() {
    const queryString = require("query-string");
    const parsed = queryString.parse(window.location.search);
    console.log(parsed);
    if (parsed.shop) {
      this.props.findProductsByCategoryNameSeo(parsed.shop);
    } else if (parsed.sName) this.props.findAllProductContainName(parsed.sName);

    this.props.findByProductByState(1); // san pham mua nhieu
    window.scrollTo(0, 0);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.location !== prevProps.location) {
      const queryString = require("query-string");
      const parsed = queryString.parse(window.location.search);
      console.log(parsed);
      if (parsed.shop) {
        this.props.findProductsByCategoryNameSeo(parsed.shop);
      } else if (parsed.sName)
        this.props.findAllProductContainName(parsed.sName);
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { products } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <div className="filter-wrap my-3">
              <div className="row">
                <h1 className="col-md-4 col-lg-5 col-sm-12">
                  {this.props.category && this.props.category.name}
                </h1>
                <div className="col-md-8 col-lg-7 col-sm-12 filter-more">
                  <div className="row">
                    <div className="col-md-9 col-sm-8">
                      <form
                        id="frm_filter_header"
                        method="post"
                        action="https://4menshop.com/ao-so-mi-nam.html"
                      >
                        <label>
                          S???p x???p:
                          <select
                            name="sort_by"
                            className="form-control"
                            id="frm_filter_header_sort_by"
                          >
                            <option value="default">M???c ?????nh</option>
                            <option value="newest">M???i nh???t</option>
                            <option value="viewest">Xem nhi???u</option>
                            <option value="buyest">Mua nhi???u</option>
                            <option value="price_desc">Gi?? gi???m d???n</option>
                            <option value="price_asc">Gi?? t??ng d???n</option>
                          </select>
                        </label>
                      </form>
                    </div>
                    <div className="col-md-3 col-sm-4 hidden-xs show">
                      <span
                        id="grid"
                        title="xem d???ng l?????i"
                        className="active choose-list"
                      >
                        <i className="fa fa-th-large"></i>
                      </span>
                      <span
                        id="list"
                        title="Xem d???ng list"
                        className="choose-list"
                      >
                        <i className="fa fa-th-list"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {this.props.category && (
                <div className="col-md-12 col-sm-12 hidden-xs header-description">
                  <strong>{this.props.category.name}</strong>
                  {this.props.category.description}
                </div>
              )}
              <div className="row">
                <div className="col-sm-12">
                  {this.props.category && this.props.category.subCategorys && (
                    <div>
                      <br /> <span className="text-under">L???c s???n ph???m:</span>
                      <ul className="cat-list">
                        {this.props.category.subCategorys.map((item, index) => (
                          <li key={index}>
                            <Link
                              className="text-dark"
                              to={`/quan-ao?shop=${item.nameSeo}`}
                              title="ao so mi han quoc"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <ListProduct products={products} />
          </div>
          <div className="col-12 col-md-4 mt-4">
            <div className="wrap-search">
              <h5>
                <span>T??M KI???M</span>
              </h5>
              <form
                className="search-widget"
                action="https://4menshop.com/tim-kiem.html"
                method="post"
              >
                <label>
                  S???n ph???m t???i c???a h??ng
                  <input
                    className="form-control"
                    type="text"
                    name="sWord"
                    placeholder="Updating"
                  />
                </label>
                <button type="submit" name="search" aria-label="T??m">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
            <div className="wrap-product-hot">
              <h5>
                <span>S???N PH???M B??N CH???Y</span>
              </h5>
              {this.props.buyMoreProducts.map((item, index) => (
                <Link
                  key={index}
                  className="text-dark"
                  to={`/san-pham?sp=${item.nameSeo}`}
                >
                  <ProductSmall product={item} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Shop.defaultProps = {
  products: [],
  statusAction: -1,
  category: "",
  buyMoreProducts: [],
};
const mapStateToProps = (state) => ({
  statusAction: state.statusAction,
  products: state.products,
  category: state.category,
  buyMoreProducts: state.buyMoreProducts,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      findProductsByCategoryNameSeo,
      findAllProductContainName,
      findByProductByState,
    },
    dispatch
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
