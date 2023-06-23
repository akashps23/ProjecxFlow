import Home from "./pages/homepage";
import Login from "./pages/Login";
import UserType from "./pages/selectingtype";
import AdminProfile from "./pages/profileadmin";
import SignUp from "./pages/signup";
import MiniList from "./pages/miniprojectlist";
import MainList from "./pages/mainprojectlist";
import ProjectSearch from "./pages/projectsearch";
import ForgotPassword from "./pages/forgotpassword";
import TeamCreate from "./pages/teamcreate";
import ProfileCoordinator from "./pages/profilecoordinator";
import ProfileGuide from "./pages/profileguide";
import ProfileStudent from "./pages/profilestudent";

import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/miniproject" element={<MiniList />} />
          <Route path="/usertype" element={<UserType />} />
          <Route path="/profileadmin" element={<AdminProfile />} />
          <Route path="/mainproject" element={<MainList />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/projectsearch" element={<ProjectSearch />} />
          <Route path="/studentsignup" element={<SignUp />} />
          <Route path="/teamcreate" element={<TeamCreate />} />
          <Route path="/profilecoordinator" element={<ProfileCoordinator />} />
          <Route path="/profileguide" element={<ProfileGuide />} />
          <Route path="/profilestudent" element={<ProfileStudent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
