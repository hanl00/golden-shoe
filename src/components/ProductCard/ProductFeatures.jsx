import React from "react";
import {
  LocalShipping,
  Warehouse,
  FallCollection,
} from "../UI/Icons/Icons";

const ProductFeatures = (props) => {
  return (
    <React.Fragment>
      {props.product.fall_collection ? (
        <span className="shop-card-product-features" title="Fall Collection">
          <FallCollection />
          {props.showText ? (
            <span className="feature-text">Fall collection</span>
          ) : null}
        </span>
      ) : null}
      {props.product.environment_friendly_and_sustainably_sourced ? (
        <span className="shop-card-product-features" title="Environment friendly and sustainably sourced">
          <Warehouse />
          {props.showText ? (
            <span className="feature-text">Environment friendly and sustainably sourced</span>
          ) : null}
        </span>
      ) : null}
      {props.product.next_day_delivery ? (
        <span
          className="shop-card-product-features"
          title="Delivery Options"
        >
          <LocalShipping />
          {props.showText ? (
            <span className="feature-text">Next day delivery</span>
          ) : null}
        </span>
      ) : null}
    </React.Fragment>
  );
};

export default ProductFeatures;
