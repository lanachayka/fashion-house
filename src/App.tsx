import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import { CartIcon } from "./components/CartIcon/CartIcon";
import { routes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <CartIcon count={0} />
      <Routes>{routes}</Routes>
    </BrowserRouter>
  );
}

export default App;
