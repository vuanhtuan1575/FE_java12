import React, { Component } from "react";
import Carousel from "../components/Carousel";
import ListProduct from "../components/ListProduct";

export default class Body extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <ListProduct />
      </div>
    );
  }
}
