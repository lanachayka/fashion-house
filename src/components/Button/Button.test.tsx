import { fireEvent, render, screen } from "@testing-library/react";
import { Button, ButtonTypes } from "./Button";

test("render without errors", () => {
  render(<Button styleType={ButtonTypes.light} text={"Test button"} />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("onClick function calling", () => {
  const mockOnClick = jest.fn();
  render(
    <Button
      styleType={ButtonTypes.dark}
      text={"Test button"}
      onClick={mockOnClick}
    />
  );
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(mockOnClick).toBeCalled();
});
