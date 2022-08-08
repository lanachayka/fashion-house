import { MainPage } from "./pages/MainPage/MainPage";
import { Route } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage/AboutPage";

export const routes: JSX.Element[] = [
  <Route
    key={"/fashion-house"}
    path={"/fashion-house"}
    element={<MainPage />}
  />,
  <Route key={"/"} path={"/"} element={<MainPage />} />,
  <Route key={"/about"} path={"/about"} element={<AboutPage />} />,
];
