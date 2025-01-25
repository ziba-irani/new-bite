import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { lazy } from "react";
const Header = lazy(() => import("./components/welcome/header.tsx"));
const WelcomePage = lazy(() => import("./components/welcome"));
const Shop = lazy(() => import("./components/shop"));
const ProductPage = lazy(
  () => import("../customeComponents/product-page/index")
);
const AboutBite = lazy(() => import("./components/about/index.tsx"));
const BiteImpact = lazy(() => import("./components/impact/index.tsx"));
const Footer = lazy(() => import("./components/welcome/footer.tsx"));
function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Header />
        <Routes>
          <Route element={<WelcomePage />} path="/" />
          <Route element={<Shop />} path="/collection/:status" />
          <Route element={<ProductPage />} path="/collection/:status/:id" />
          <Route element={<ProductPage />} path="/collection/:id" />
          <Route element={<AboutBite />} path="/about" />
          <Route element={<BiteImpact />} path="/impact" />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
