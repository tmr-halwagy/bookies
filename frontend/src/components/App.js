import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookSearch from "../pages/SearchPage"; // Import the SearchPage
import BookInfo from "./BookInfo"; // Import the BookInfo component

const App = () => {
  return (
    <Router>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold underline text-blue-900">
          Home Page
        </h1>
        <Routes>
          <Route path="/" element={<BookSearch />} />{" "}
          {/* Home route to search page */}
          <Route path="/book/:id" element={<BookInfo />} />{" "}
          {/* Dynamic book info route */}
        </Routes>
      </div>
    </Router>
  );
};

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(<App />);
