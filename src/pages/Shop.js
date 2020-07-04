import React, { Component } from "react";
import ListProduct from "../components/ListProduct";
import "./Shop.css";
import ProductSmall from "../components/ProductSmall";
export default class Shop extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <div className="filter-wrap my-3">
              <div className="row">
                <h1 className="col-md-4 col-lg-5 col-sm-12">Áo Sơ Mi Nam</h1>
                <div className="col-md-8 col-lg-7 col-sm-12 filter-more">
                  <div className="row">
                    <div className="col-md-9 col-sm-8">
                      <form
                        id="frm_filter_header"
                        method="post"
                        action="https://4menshop.com/ao-so-mi-nam.html"
                      >
                        <label>
                          Sắp xếp:
                          <select
                            name="sort_by"
                            className="form-control"
                            id="frm_filter_header_sort_by"
                          >
                            <option value="default">Mặc định</option>
                            <option value="newest">Mới nhất</option>
                            <option value="viewest">Xem nhiều</option>
                            <option value="buyest">Mua nhiều</option>
                            <option value="price_desc">Giá giảm dần</option>
                            <option value="price_asc">Giá tăng dần</option>
                          </select>
                        </label>
                      </form>
                    </div>
                    <div className="col-md-3 col-sm-4 hidden-xs show">
                      <span
                        id="grid"
                        title="xem dạng lưới"
                        className="active choose-list"
                      >
                        <i className="fa fa-th-large"></i>
                      </span>
                      <span
                        id="list"
                        title="Xem dạng list"
                        className="choose-list"
                      >
                        <i className="fa fa-th-list"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 hidden-xs header-description">
                <strong>Áo sơ mi nam</strong> luôn là trang phục lựa chọn hàng
                đầu của nhiều chàng trai, bởi sự tiện ích và tính thời trang mà
                nó mang lại cho người mặc.
                <br /> Tại 4MEN, chúng tôi thường xuyên cập nhật những mẫu áo sơ
                mi mới từ kiểu dáng trơn, sọc caro đến sơ mi phối họa tiết…,
                nhằm giúp khách hàng lựa chọn được những sản phẩm đẹp, chất
                lượng phù hợp với nhu cầu và sở thích của mình một cách dễ dàng
                nhất.
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <br /> <span class="text-under">Lọc sản phẩm:</span>
                  <ul className="cat-list">
                    <li>
                      <a
                        href="https://4menshop.com/ao-so-mi-han-quoc.html"
                        title="ao so mi han quoc"
                      >
                        Áo Sơ Mi Hàn Quốc
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://4menshop.com/ao-so-mi-hoa-tiet.html"
                        title="ao so mi hoa tiet"
                      >
                        Áo Sơ Mi Họa Tiết
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://4menshop.com/ao-so-mi-caro.html"
                        title="ao so mi caro"
                      >
                        Áo Sơ Mi Caro
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://4menshop.com/ao-so-mi-ngan-tay.html"
                        title="ao so mi ngan tay"
                      >
                        Áo Sơ Mi Ngắn Tay
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://4menshop.com/ao-so-mi-jean-denim.html"
                        title="ao so mi jean - denim"
                      >
                        Áo Sơ Mi Jean - Denim
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ListProduct />
          </div>
          <div className="col-12 col-md-4 mt-4">
            <div className="wrap-search">
              <h5>
                <span>TÌM KIẾM</span>
              </h5>
              <form
                role="form"
                className="search-widget"
                action="https://4menshop.com/tim-kiem.html"
                method="post"
              >
                <label>
                  Sản phẩm tại 4MEN
                  <input
                    className="form-control"
                    type="text"
                    name="text"
                    placeholder="Từ khóa tìm kiếm"
                    value=""
                  />
                </label>
                <button type="submit" name="search" aria-label="Tìm">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
            <div className="wrap-product-hot">
              <h5>
                <span>SẢN PHẨM BÁN CHẠY</span>
              </h5>
              <ProductSmall />
              <ProductSmall />
              <ProductSmall />
              <ProductSmall />
              <ProductSmall />
              <ProductSmall />
              <ProductSmall />
              <ProductSmall />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
