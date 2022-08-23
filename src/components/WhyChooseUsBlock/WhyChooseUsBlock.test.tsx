import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { WhyChooseUsBlock } from "./WhyChooseUsBlock";

test("render without errors", () => {
  render(
    <BrowserRouter>
      <WhyChooseUsBlock />
    </BrowserRouter>
  );
  expect(screen.getByText("WHY CHOOSE US")).toBeInTheDocument();
});
