import { render, screen } from "@testing-library/react";
import { AboutUsQuote } from "./AboutUsQuote";

test("render without errors", () => {
  render(<AboutUsQuote />);
  expect(screen.getByText("Johanna Innsbruck")).toBeInTheDocument();
});
