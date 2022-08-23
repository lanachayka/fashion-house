import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { InfoBlock } from "./InfoBlock";

test("render without errors", () => {
    render(
      <BrowserRouter>
        <InfoBlock />
      </BrowserRouter>
    );
    expect(screen.getByText("DESIGNER CLOTHES")).toBeInTheDocument();
});
