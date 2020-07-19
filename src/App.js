import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProductDetailPage from "./pages/ProductDetailPage";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";
import AlertModel from "./components/AlertModel";
import Payment from "./pages/Payment";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/san-pham" component={ProductDetailPage}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/quan-ao" component={Shop}></Route>
          <Route exact path="/dang-nhap" component={Login}></Route>
          <Route exact path="/admin" component={AdminPage}></Route>
          <Route exact path="/thanh-toan" component={Payment}></Route>
          <Route exact path="/test" component={AlertModel}></Route>
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
