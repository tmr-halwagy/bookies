import React from "react";
import { createRoot } from "react-dom/client";
import BookSearch from "./SearchPage";

const App = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <BookSearch />
    </div>
  );
};

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(<App />);
