import Home from "./pages/homepage";
import Login from "./pages/Login";
import UserType from "./pages/selectingtype";
import AdminProfile from "./pages/adminprofile";
import SignUp from "./pages/signup";
import MiniList from "./pages/miniprojectlist";
import MainList from "./pages/mainprojectlist";
import ProjectSearch from "./pages/projectsearch";
import ForgotPassword from "./pages/forgotpassword";
import TeamCreate from "./pages/teamcreate";
import ProfileCoordinator from "./pages/profilecoordinator";

import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ProfileCoordinator />} />
          <Route path="/login" element={<Login />} />
          <Route path="/miniprojectlist" element={<MiniList />} />
          <Route path="/selectingtype" element={<UserType />} />
          <Route path="/adminprofile" element={<AdminProfile />} />
          <Route path="/mainprojectlist" element={<MainList />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/projectsearch" element={<ProjectSearch />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/teamcreate" element={<TeamCreate />} />
          <Route path="/profilecoordinator" element={<ProfileCoordinator />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
