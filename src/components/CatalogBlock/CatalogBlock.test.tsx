import { render, screen } from "@testing-library/react";
import { CatalogItem } from "../../pages/CatalogPage/catalogData";
import { CatalogBlock } from "./CatalogBlock";

const mockItem: CatalogItem = {
  id: 1,
  img: "shirt.png",
  title: "Test title",
  text: "Test text",
};

test("render with correct item parameters", () => {
    render(<CatalogBlock item={mockItem} />);
    expect(screen.getByText("Test title")).toBeInTheDocument();
    expect(screen.getByText("Test text")).toBeInTheDocument();
});
