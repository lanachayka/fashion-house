import { fireEvent, render, screen } from "@testing-library/react";
import { Carousel } from "./Carousel";

const mockItems = [
  {
    id: 0,
    img: "accessories.png",
    title: "Test Accessories",
    text: "Test Accessories",
  },
  {
    id: 1,
    img: "shirt.png",
    title: "Test Shirt & Tops",
    text: "Test Shirt & Tops",
  },
  {
    id: 2,
    img: "dresses.png",
    title: "Test Dresses",
    text: "Test Dresses",
  },
  {
    id: 3,
    img: "pants.png",
    title: "Test Pants",
    text: "Test Pants",
  },
];

describe("carousel testing", () => {
  let forwardArrow: Element;
  let backArrow: Element;
  beforeEach(() => {
    render(<Carousel items={mockItems} />);
    forwardArrow = screen.getByAltText("arrow forward icon");
    backArrow = screen.getByAltText("arrow back icon");
  });

  test("change catalog block by forward arrow", () => {
    fireEvent.click(forwardArrow);
    expect(screen.getByAltText("Test Shirt & Tops"));
  });

  test("change catalog block by forward arrow from last one", () => {
    fireEvent.click(forwardArrow);
    fireEvent.click(forwardArrow);
    fireEvent.click(forwardArrow);
    fireEvent.click(forwardArrow);
    expect(screen.getByAltText("Test Accessories"));
  });

  test("change catalog block by back arrow", () => {
    fireEvent.click(forwardArrow);
    fireEvent.click(backArrow);
    expect(screen.getByAltText("Test Accessories"));
  });

  test("change catalog block by back arrow from first one", () => {
    fireEvent.click(backArrow);
    expect(screen.getByAltText("Test Pants"));
  });
});
