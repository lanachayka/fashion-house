import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { StoreHeader } from "./StoreHeader";

test("render without errors", () => {
  render(
    <BrowserRouter>
      <StoreHeader />
    </BrowserRouter>
  );
  expect(screen.getByRole("navigation")).toBeInTheDocument();
});
