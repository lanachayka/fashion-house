import { render, screen, fireEvent } from "@testing-library/react";
import { ContactForm } from "./ContactForm";

test("render without errors", () => {
  render(<ContactForm hideModal={() => {}} />);
  expect(screen.getByPlaceholderText("Your message")).toBeInTheDocument();
});
