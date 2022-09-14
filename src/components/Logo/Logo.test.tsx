import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Logo, LogoTypes } from "./Logo";

test("render without errors color logo", () => {
  render(
    <BrowserRouter>
      <Logo type={LogoTypes.color} className="logo" />
    </BrowserRouter>
  );
  expect(screen.getByRole("img")).toBeInTheDocument();
});

test("render without errors white logo", () => {
  render(
    <BrowserRouter>
      <Logo type={LogoTypes.white} className="logo" />
    </BrowserRouter>
  );
  expect(screen.getByRole("img")).toBeInTheDocument();
});
