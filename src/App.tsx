import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/welcome";
import Shop from "./components/shop";
import Header from "./components/welcome/header";
import ProductPage from "../customeComponents/product-page/index";
import { ToastContainer } from "react-toastify";
import BiteImpact from "./components/impact/index.tsx";
import AboutBite from "./components/about/index.tsx";
import Footer from "./components/welcome/footer.tsx";

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
        <Footer/>
      </Router>
    </>
  );
}

export default App;
