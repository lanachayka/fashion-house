import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { Menu } from "./Menu"

test("render without errors", () => {
    render(<Menu />, { wrapper: BrowserRouter });
    expect(screen.getByText("About us")).toBeInTheDocument();
});