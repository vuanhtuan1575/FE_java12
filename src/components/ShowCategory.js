import React, { Component } from "react";
import "./ShowCategory.css";

export default class ShowCategory extends Component {
  render() {
    return (
      <div className="d-none d-lg-block bg-light">
        <div className="container my-5">
          <div className="category">
            <div>
              <img
                className="img-responsive"
                src="/img/slide-1-trang-chu-slide-1.png"
                alt=""
              />
            </div>
            <div>
              <div className="block-content block-content-c">
                <a
                  href="http://4menshop.com/phu-kien-nam.html"
                  title=" banner index 2"
                >
                  <img
                    src="/img/slide-2-trang-chu-slide-2.png"
                    className="img-responsive"
                    alt=" banner index 2"
                  />
                </a>
              </div>
              <div className="block-content">
                <a
                  href="http://4menshop.com/giay-nam.html"
                  title=" banner index 3"
                >
                  <img
                    src="/img/slide-3-trang-chu-slide-3.png"
                    className="img-responsive"
                    alt=" banner index 3"
                  />
                </a>
              </div>
            </div>
            <div>
              <div className="block-content">
                <a
                  href="http://4menshop.com/quan-kaki-nam.html"
                  title=" banner index 4"
                >
                  <img
                    src="/img/slide-4-trang-chu-slide-4.png"
                    className="img-responsive"
                    alt=" banner index 4"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
