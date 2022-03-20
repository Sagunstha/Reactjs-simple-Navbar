import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./components/container/ProductListing";
import Header from "./components/container/Header";
import "./App.css";
import ProductDetails from "./components/container/ProductDetails";
import "antd/dist/antd.css";
import SignUp from "./signup/SignUp";
import Home from "./Home";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Home/>
        <Switch>
        <Route path="/signUp" component={SignUp} />
          <Route path="/" exact component={ProductListing} />
          {/* <Route path="/product/:productId"  component={ProductDetails} /> */}
          <Route path="/product"  component={ProductDetails} />

          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
