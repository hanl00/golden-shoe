import React from "react";
import { NavLink } from "react-router-dom";

import men_banner from './../../../assets/images/men_banner.jpg';
import women_banner from './../../../assets/images/women_banner.jpg';
import sale_banner from './../../../assets/images/sale_banner.jpg';


const ItemBanners = () => {
  let itemData = [
    {
      image: men_banner,
      title: "Men",
      text: `New Arrivals`,
      link: "/category/men",
      percentage: "25",
    },
    {
      image: women_banner,
      title: "Women",
      text: `Limited Offer`,
      link: "/category/kids",
      percentage: "30",
    },
    {
      image: sale_banner,
      title: "Clearance",
      text: `All must go`,
      link: "/category/kids",
      percentage: "75",
    },
  ];

  function generateItemBanners() {
    return itemData.map((item, index) => {
      return (
        <div className="item-container shadow" key={index}>
          <div className="item-content">
            <p className="item-banner-title my-1">{item.title}</p>
            <h4 className="mb-3">
              {item.text} <br /> Up to {item.percentage}%
            </h4>
            <NavLink className="btn btn-primary btn-sm" to={item.link} exact>
              Shop Now
            </NavLink>
          </div>
          <img
            className="banner-image"
            src={item.image}
            alt="banner"
          />
        </div>
      );
    });
  }

  return (
    <div className="container item-banners mb-4">{generateItemBanners()}</div>
  );
};

export default ItemBanners;
