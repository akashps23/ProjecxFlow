import Home from "./pages/homepage";
import Login from "./pages/Login";
import UserType from "./pages/selectingtype";
import AdminProfile from "./pages/profileadmin";
import SignupStudent from "./pages/signupstudent";
import MiniList from "./pages/miniprojectlist";
import MainList from "./pages/mainprojectlist";
import ProjectSearch from "./pages/projectsearch";
import ForgotPassword from "./pages/forgotpassword";
import TeamCreate from "./pages/teamcreate";
import ProfileCoordinator from "./pages/profilecoordinator";
import ProfileGuide from "./pages/profileguide";
import ProfileStudent from "./pages/profilestudent";
import SignupCoordinator from "./pages/signupcoordinator";
// import StudentList from "./pages/studentlist";
import ProjectDetails from "./pages/projectdetails";

import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* home page */}
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/miniproject" element={<MiniList />} />
          <Route path="/mainproject" element={<MainList />} />
          <Route path="/projectsearch" element={<ProjectSearch />} />
          <Route path="/usertype" element={<UserType />} />
          {/* login page */}
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          {/* SignUp */}
          <Route path="/signupcoordinator" element={<SignupCoordinator />} />
          <Route path="/signupstudent" element={<SignupStudent />} />
          {/* Profiles */}
          <Route path="/profileadmin" element={<AdminProfile />} />
          <Route path="/profileguide" element={<ProfileGuide />} />
          <Route path="/profilestudent" element={<ProfileStudent />} />
          <Route path="/profilecoordinator" element={<ProfileCoordinator />} />
          {/* Team Create */}
          <Route path="/teamcreate" element={<TeamCreate />} />
          {/* <Route path="/ studentlist" element={<StudentList />} /> */}
          <Route path="/projectdetails" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
