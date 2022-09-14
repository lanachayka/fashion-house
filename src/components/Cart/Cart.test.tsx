import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import {
  AppContextWrapper,
  AppContext,
  AppContextType,
  SelectedItems,
} from "../../context/AppContext";
import { Cart } from "./Cart";

test("render without errors", () => {
  render(<Cart hideModal={() => {}} />);
  expect(screen.getByText("Products")).toBeInTheDocument();
});

test("called hide function after order", () => {
  const mockHide = jest.fn();
  render(<Cart hideModal={mockHide} />, { wrapper: AppContextWrapper });
  const orderButton = screen.getByRole("button");
  fireEvent.click(orderButton);
  expect(mockHide).toBeCalled();
});

const customRender = (ui: React.ReactNode, providerProps: AppContextType) => {
  return render(
    <AppContext.Provider value={providerProps}>{ui}</AppContext.Provider>,
    { wrapper: BrowserRouter }
  );
};

describe("context testing", () => {
  const providerProps = {
    count: 2,
    setCount: (count: number) => {
      providerProps.count = count;
    },
    selectedItems: [
      {
        count: 1,
        item: {
          id: 18,
          photo: "productCode18.png",
          price: 150,
          currency: "USD",
          name: "Test Dress18",
          description: "A knitted cotton test dress",
          sizes: "XS, S, M, L, XL",
        },
      },
      {
        count: 1,
        item: {
          id: 19,
          photo: "productCode19.png",
          price: 140,
          currency: "USD",
          name: "Test Dress19",
          description: "A knitted cotton test dress",
          sizes: "XS, S, M, L, XL",
        },
      },
    ],
    setSelectedItems: (items: SelectedItems[]) => {
      providerProps.selectedItems = items;
    },
    total: 290,
    setTotal: (total: number) => {
      providerProps.total = total;
    },
  };
  beforeEach(() => {
    customRender(<Cart hideModal={() => {}} />, providerProps);
  });
  test("render list of selected items", () => {
    expect(screen.getByAltText("Test Dress18")).toBeInTheDocument();
    expect(screen.getByAltText("Test Dress19")).toBeInTheDocument();
  });
  test("delete product from shopping cart", async () => {
    const deleteIcon = screen.getAllByAltText("delete icon");
    fireEvent.click(deleteIcon[0]);
    expect(providerProps.selectedItems).toHaveLength(1);
  });
  test("change product count", async () => {
    const inputs = screen.getAllByTestId("numberBox");
    fireEvent.change(inputs[0], { target: { value: "2" } });
    expect(providerProps.selectedItems[0].count).toBe(2);
  });
});
