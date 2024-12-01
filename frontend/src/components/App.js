import React from "react";
import { createRoot } from "react-dom/client";
import BookSearch from "../pages/SearchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import NavBar from "./NavBar";
import AuthPage from "../pages/AuthPage";
import { useAuthentication } from "../auth";
import RedirectGoogleAuth from "./GoogleRedirectHandler";

const App = () => {
  const {isAuthorized} = useAuthentication()
  const ProtectedLogin = () => {
    return isAuthorized ? <Navigate to='/' /> : <AuthPage initialMethod='login' />
  }
  const ProtectedRegister = () => {
    return isAuthorized ? <Navigate to='/' /> : <AuthPage initialMethod='register' />
  }

  return (
    <Router>
      <NavBar />
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold underline text-blue-900">
          Search Page
        </h1>
        <Routes>
          <Route path="/login/callback" element={<RedirectGoogleAuth />} />
          <Route path="/login" element={<ProtectedLogin />}/>
          <Route path="/register" element={<ProtectedRegister />}/>
          <Route path="*" element={<NotFound/>} />
          <Route path="/" element={<BookSearch />} />
        </Routes>
      </div>
    </Router>
  );
};

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(<App />);
