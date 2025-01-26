import { Outlet } from "react-router-dom";
import Nav from "./NavTabs";

import "./App.css";

import Header from "./Header";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
