import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Banner from "../views/Home/components/Banner";

test("should render banner component", () => {
  render(
    <BrowserRouter>
      <Banner />
    </BrowserRouter>
  );
  const bannerTitle = screen.getByTestId("display-4 main-banner-title");
  expect(bannerTitle).toBeInTheDocument();
});
