import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProductDetailPage from "./pages/ProductDetailPage";
import Shop from "./pages/Shop";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/product" component={ProductDetailPage}></Route>
          <Route exact path="/Home" component={Home}></Route>
          <Route exact path="/shop" component={Shop}></Route>
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
