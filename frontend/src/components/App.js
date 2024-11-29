import React from "react";
import { createRoot } from "react-dom/client";
import BookSearch from "./SearchPage";

const App = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold underline text-blue-900">
        Home Page!!
      </h1>
      <BookSearch />
    </div>
  );
};

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(<App />);
