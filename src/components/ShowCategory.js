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
                src="https://4menshop.com/images/thumbs/slides/slide-1-trang-chu-slide-1.png?t=1537897385"
              />
            </div>
            <div>
              <div class="block-content block-content-c">
                <a
                  href="http://4menshop.com/phu-kien-nam.html"
                  title=" banner index 2"
                >
                  <img
                    src="https://4menshop.com/images/thumbs/slides/slide-2-trang-chu-slide-2.png?t="
                    class="img-responsive"
                    alt=" banner index 2"
                  />
                </a>
              </div>
              <div class="block-content">
                <a
                  href="http://4menshop.com/giay-nam.html"
                  title=" banner index 3"
                >
                  <img
                    src="https://4menshop.com/images/thumbs/slides/slide-3-trang-chu-slide-3.png?t="
                    class="img-responsive"
                    alt=" banner index 3"
                  />
                </a>
              </div>
            </div>
            <div>
              <div class="block-content">
                <a
                  href="http://4menshop.com/quan-kaki-nam.html"
                  title=" banner index 4"
                >
                  <img
                    src="https://4menshop.com/images/thumbs/slides/slide-4-trang-chu-slide-4.png?t="
                    class="img-responsive"
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
