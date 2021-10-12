import React, { Component } from "react";

import Loader from "../../components/Loader/Index";

import FillerBanners from "./components/FillerBanners";
import Banner from "./components/Banner";

import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      products: null,
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
    fetch("http://127.0.0.1:8000/api/products/")
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  }

  render() {
    console.log(this.state);

    return this.state.loading ? (
      <Loader />
    ) : (
      <React.Fragment>
        <Banner />
        <FillerBanners />
      </React.Fragment>
    );
  }
}

export default Home;
