import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookSearch from "../pages/SearchPage";
import BookInfo from "./BookInfo";
import RecommendationPage from "../pages/recommendation";
const App = () => {
  return (
    <Router>
      <div className="container mx-auto flex flex-col items-center align-middle">
        <h1 className="text-3xl font-bold underline text-blue-900">
          Home Page
        </h1>
        <Routes>
          <Route path="/search" element={<BookSearch />} />
          <Route path="/book/:id" element={<BookInfo />} />
          <Route path="/" element={<RecommendationPage />} />
        </Routes>
      </div>
    </Router>
  );
};

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(<App />);
