import { render, screen } from "@testing-library/react";
import { PageHeader } from "./PageHeader";

test("render without errors with correct props", () => {
  render(<PageHeader name="test name" title="test title" text="test text" />);
  expect(screen.getByText("test name")).toBeInTheDocument();
  expect(screen.getByText("test title")).toBeInTheDocument();
  expect(screen.getByText("test text")).toBeInTheDocument();
});
