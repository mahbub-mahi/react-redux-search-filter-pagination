import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CardDetailsPage from "./components/CardDetailsPage";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import PageNotFound from "./components/Common/PageNotFound";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/card/:ID" element={<CardDetailsPage />} />
            <Route component={PageNotFound} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
