import React from "react";
import { NavLink } from "react-router-dom";

import fall_collection from './../../../assets/images/fall_collection.jpg';

const Banner = () => {

  const bannerItem = {
    image: fall_collection,
    title: "2021 Fall Collection",
    text:
      "Introducing 2021 Fall Collection in collaboration with Tony Stork",
    link: "/all",
  };

  return (
    <div className="container main-banner-container my-4">
      <div className="main-banner-content">
        <div className="main-banner-text">
          <h4 className="display-4 main-banner-title">{bannerItem.title}</h4>
          <p className="lead">{bannerItem.text}</p>
          <p>
            <NavLink className="btn btn-primary btn-lg" to={bannerItem.link} exact>
              Shop Now
            </NavLink>
          </p>
        </div>
        <img
          className="main-banner-image"
          src={bannerItem.image}
          alt="banner"
        />
      </div>
    </div>
  );
};

export default Banner;
