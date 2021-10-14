import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import Banner from "../views/Home/components/Banner";

test("should display banner title", () => {
  render(
    <BrowserRouter>
      <Banner />
    </BrowserRouter>
  );
  const bannerTitle = screen.getByTestId("banner-title");
  expect(bannerTitle).toHaveTextContent('2021 Fall Collection');
});
