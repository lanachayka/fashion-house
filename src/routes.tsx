import { MainPage } from "./pages/MainPage/MainPage";
import { Route } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { HistoryPage } from "./pages/HistoryPage/HistoryPage";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { CollectionPage } from "./pages/CollectionPage/CollectionPage";
import { StoreHomePage } from "./pages/StoreHomePage/StoreHomePage";
import { ProductPage } from "./pages/ProductPage/ProductPage";

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
    key={"/collection"}
    path={"/fashion-house/collection"}
    element={<CollectionPage />}
  />,
  <Route
    key={"/contacts"}
    path={"/fashion-house/contacts"}
    element={<ContactPage />}
  />,
  <Route
    key={"/store"}
    path={"/fashion-house/store"}
    element={<StoreHomePage />}
  />,
  <Route
    key={"/store/:id"}
    path={"/fashion-house/store/:id"}
    element={<ProductPage />}
  />,
];
