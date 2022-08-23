import { render, screen, fireEvent } from "@testing-library/react";
import { Form, FormTypes } from "./Form";

test("render without errors", () => {
  render(<Form formType={FormTypes.order} onSubmit={() => {}} />);
  expect(screen.getByPlaceholderText("Your comment")).toBeInTheDocument();
});

test("onSubmit function calling", () => {
  const mockOnSubmit = jest.fn((e) => e.preventDefault());
  render(<Form formType={FormTypes.contact} onSubmit={mockOnSubmit} />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(mockOnSubmit).toBeCalled();
});
