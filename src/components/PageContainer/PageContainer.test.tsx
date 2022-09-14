import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { PageContainer } from "./PageContainer";

test("render without errors with correct children", () => {
  render(
    <PageContainer>
      <h1>test</h1>
    </PageContainer>,
    { wrapper: BrowserRouter }
  );
  expect(screen.getByAltText("Logo")).toBeInTheDocument();
  expect(screen.getByText("test")).toBeInTheDocument();
});
