import { render, screen } from "@testing-library/react";
import { AboutUsBlock } from "./AboutUsBlock";

test("render without errors", () => {
  render(<AboutUsBlock />);
  expect(screen.getByText("ABOUT US")).toBeInTheDocument();
});
