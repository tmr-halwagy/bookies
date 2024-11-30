import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookSearch from "../pages/SearchPage";
import AuthForm from "../pages/AuthPage";  // Importing the AuthForm component for the register page

const App = () => {
  return (
    <Router>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold underline text-blue-900">Home Page!!</h1>
        <Routes>
          <Route path="/" element={<BookSearch />} /> {/* Home route */}
          <Route path="/api/user/register" element={<AuthForm />} /> {/* Register page */}
        </Routes>
      </div>
    </Router>
  );
};

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(<App />);
