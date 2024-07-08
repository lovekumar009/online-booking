import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Event from "./Pages/Event";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
