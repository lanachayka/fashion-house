import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>{routes}</Routes>
    </BrowserRouter>
  );
}

export default App;
