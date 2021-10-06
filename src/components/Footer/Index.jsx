import React from "react";

import NewsLetter from "./components/NewsLetter";
import FooterLinks from "./components/FooterLinks";
import "./Footer.css";

const Index = () => {
  return (
    <React.Fragment>
      <NewsLetter />
      <FooterLinks />
    </React.Fragment>
  );
};

export default Index;
