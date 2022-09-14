import { render, screen } from "@testing-library/react";
import { Title } from "./Title"

test('render with correct title', () => {
    render(<Title text="Test title" />)
    expect(screen.getByText("Test title")).toBeInTheDocument();
});