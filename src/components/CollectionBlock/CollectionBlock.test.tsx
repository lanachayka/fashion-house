import { render, screen } from "@testing-library/react";
import { CollectionItem } from "../../pages/CollectionPage/collectionData";
import { CollectionBlock, PhotoSizes } from "./CollectionBlock";
import { ButtonTypes } from "../Button/Button";
import { BrowserRouter } from "react-router-dom";
import { findItemById } from "./helper";

const mockItem: CollectionItem = {
  id: 18,
  photo: "productCode18.png",
  price: 150,
  currency: "USD",
  name: "Test Dress",
  description: "A knitted cotton test dress",
  sizes: "XS, S, M, L, XL",
};

const mockItem2: CollectionItem = {
  id: 19,
  photo: "productCode19.png",
  price: 140,
  currency: "USD",
  name: "Test Dress",
  description: "A knitted cotton test dress",
  sizes: "XS, S, M, L, XL",
};

test("render with correct item parameters", () => {
  render(
    <CollectionBlock
      item={mockItem}
      photoSize={PhotoSizes.big}
      buttonText="test button text"
      buttonType={ButtonTypes.color}
    />,
    { wrapper: BrowserRouter }
  );
  expect(screen.getByText("Test Dress")).toBeInTheDocument();
  expect(screen.getByText("150.00")).toBeInTheDocument();
});

describe("findItemById function", () => {
  const mockSelectedItem = {
    count: 3,
    item: mockItem,
  };
  test("correct add first item", () => {
    const selectedItems = findItemById([], mockItem);
    expect(selectedItems[0].count).toBe(1);
    expect(selectedItems.length).toBe(1);
  });
  test("correct add item if its already selected", () => {
    const selectedItems = findItemById([mockSelectedItem], mockItem);
    expect(selectedItems[0].count).toBe(4);
    expect(selectedItems.length).toBe(1);
  });
  test("correct add item if its not selected before", () => {
    const selectedItems = findItemById([mockSelectedItem], mockItem2);
    expect(selectedItems.length).toBe(2);
  });
});

//TODO: add test for App context
