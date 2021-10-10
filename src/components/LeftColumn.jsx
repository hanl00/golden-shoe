import React from "react";

import ProductFilter from "../components/ProductFilter/Index";
import PromoCodes from "./PromoCodes";

const LeftColumn = () => {
  return (
    <React.Fragment>
      <div className={"container shop-left-column py-2"}>
        <PromoCodes showText></PromoCodes>
      </div>
      <ProductFilter />
    </React.Fragment>
  );
};

export default LeftColumn;
