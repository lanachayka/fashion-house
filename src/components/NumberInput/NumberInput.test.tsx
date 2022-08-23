import { fireEvent, render, screen } from "@testing-library/react";
import { NumberInput } from "./NumberInput";

test("render without errors", () => {
  render(
    <NumberInput
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => e.preventDefault()}
    />
  );
  expect(screen.getByTestId("numberBox")).toBeInTheDocument();
});

test("render with correct value", () => {
  render(
    <NumberInput
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => e.preventDefault()}
      value={1}
    />
  );
  expect(screen.getByTestId("numberBox")).toHaveAttribute("value", "1");
});

test("onChange function called", () => {
  const mockOnChange = jest.fn((e: React.ChangeEvent<HTMLInputElement>) =>
    e.preventDefault()
  );
  render(<NumberInput onChange={mockOnChange} />);
  const input = screen.getByTestId("numberBox");
  fireEvent.change(input, { target: { value: "2" } });
  expect(mockOnChange).toBeCalled();
});
