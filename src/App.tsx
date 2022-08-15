import { useContext } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import { CartIcon } from "./components/CartIcon/CartIcon";
import { AppContext } from "./context/AppContext";
import { routes } from "./routes";

function App() {
  const { count } = useContext(AppContext);
  return (
    <BrowserRouter>
      {count > 0 && <CartIcon count={count} />}
      <Routes>{routes}</Routes>
    </BrowserRouter>
  );
}

export default App;
