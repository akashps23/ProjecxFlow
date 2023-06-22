import Login from "./pages/loginpage";
import Home from "./pages/homepage";
import UserType from "./pages/selectingtype";
import AdminProfile from "./pages/adminprofile";
import SignUp from "./pages/signup";
import MiniList from "./pages/miniprojectlist";
import MainList from "./pages/mainprojectlist";
import ProjectSearch from "./pages/projectsearch";
import ForgotPassword from "./pages/forgotpassword";

import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route exact path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/miniprojectlist" element={<MiniList />} />
          <Route path="/selectingtype" element={<UserType />} />
          <Route
            path="/adminprofile"
            element={<AdminProfile />}
          />
          <Route path="/mainprojectlist" element={<MainList />} />

          <Route
            path="/forgotpassword"
            element={<ForgotPassword />}
          />
          
          <Route
            path="/projectsearch"
            element={<ProjectSearch />}
          />
          
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
