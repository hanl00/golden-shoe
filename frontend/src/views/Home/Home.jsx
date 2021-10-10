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
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }
  render() {
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
