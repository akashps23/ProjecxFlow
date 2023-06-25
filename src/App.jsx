//home
import Home from "./pages/homepage";
import UserType from "./pages/selectingtype";
import TeamCreate from "./pages/teamcreate";

//login pages
import LoginStudent from "./pages/studentlogin";
import LoginCoordinator from "./pages/coordinatorlogin";
import LoginGuide from "./pages/guidelogin";
import LoginAdmin from "./pages/adminlogin";

//signup pages
import SignupStudent from "./pages/signupstudent";
import SignupCoordinator from "./pages/signupcoordinator";
import SignupGuide from "./pages/signupguide";

//forgot password
import ForgotPasswordStudent from "./pages/forgotpasswordstudent";
import ForgotPasswordGuide from "./pages/forgotpasswordguide";
import ForgotPasswordCoordinator from "./pages/forgotpasswordcoordinator";

//features
import MiniList from "./pages/miniprojectlist";
import MainList from "./pages/mainprojectlist";
import ProjectSearch from "./pages/projectsearch";
import Timeline from "./pages/timeline";

//home profile
import AdminHome from "./pages/profileadmin";
import CoordinatorHome from "./pages/profilecoordinator";
import GuideHome from "./pages/profileguide";
import StudentHome from "./pages/profilestudent";

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

          {/* features */}
          <Route path="/miniproject" element={<MiniList />} />
          <Route path="/mainproject" element={<MainList />} />
          <Route path="/projectsearch" element={<ProjectSearch />} />
          <Route path="/teamcreate" element={<TeamCreate />} />
          <Route path="/timepage" element={<Timeline />} />

          {/* login pages */}
          <Route path="/usertype" element={<UserType />} />
          <Route path="/studentlogin" element={<LoginStudent />} />
          <Route path="/coordinatorlogin" element={<LoginCoordinator />} />
          <Route path="/guidelogin" element={<LoginGuide />} />
          <Route path="/adminlogin" element={<LoginAdmin />} />

          {/* Forgot Password */}
          <Route
            path="/forgotpasswordstudent"
            element={<ForgotPasswordStudent />}
          />
          <Route
            path="/forgotpasswordguide"
            element={<ForgotPasswordGuide />}
          />
          <Route
            path="/forgotpasswordcoordinator"
            element={<ForgotPasswordCoordinator />}
          />

          {/* SignUp Pages */}

          <Route path="/coordinatorsignup" element={<SignupCoordinator />} />
          <Route path="/studentsignup" element={<SignupStudent />} />
          <Route path="/guidesignup" element={<SignupGuide />} />

          {/* Home Pages */}
          <Route path="/adminhomepage" element={<AdminHome />} />
          <Route path="/guidehomepage" element={<GuideHome />} />
          <Route path="/studenthomepage" element={<StudentHome />} />
          <Route path="/coordinatorhomepage" element={<CoordinatorHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
