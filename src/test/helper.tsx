import { render } from "@testing-library/react";
import { AppContext, AppContextType } from "../context/AppContext";
import { BrowserRouter } from "react-router-dom";

export const customRender = (
  ui: React.ReactNode,
  providerProps: AppContextType
) => {
  return render(
    <AppContext.Provider value={providerProps}>{ui}</AppContext.Provider>,
    { wrapper: BrowserRouter }
  );
};
