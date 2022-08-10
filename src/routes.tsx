import { MainPage } from "./pages/MainPage/MainPage";
import { Route } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { HistoryPage } from "./pages/HistoryPage/HistoryPage";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";
import { ContactPage } from "./pages/ContactPage/ContactPage";

export const routes: JSX.Element[] = [
  <Route
    key={"/fashion-house"}
    path={"/fashion-house"}
    element={<MainPage />}
  />,
  <Route key={"/"} path={"/"} element={<MainPage />} />,
  <Route
    key={"/about"}
    path={"/fashion-house/about"}
    element={<AboutPage />}
  />,
  <Route
    key={"/history"}
    path={"/fashion-house/history"}
    element={<HistoryPage />}
  />,
  <Route
    key={"/catalog"}
    path={"/fashion-house/catalog"}
    element={<CatalogPage />}
  />,
  <Route
    key={"/contacts"}
    path={"/fashion-house/contacts"}
    element={<ContactPage />}
  />,
];
