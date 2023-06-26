import Home from "./pages/homepage";
import LoginStudent from "./pages/studentlogin";
import UserType from "./pages/selectingtype";
import AdminHome from "./pages/profileadmin";
import SignupStudent from "./pages/signupstudent";
import MiniList from "./pages/miniprojectlist";
import MainList from "./pages/mainprojectlist";
import ProjectSearch from "./pages/projectsearch";
import ForgotPasswordStudent from "./pages/forgotpasswordstudent";
import ForgotPasswordGuide from "./pages/forgotpasswordguide";
import ForgotPasswordCoordinator from "./pages/forgotpasswordcoordinator";
import TeamCreate from "./pages/teamcreate";
import SignupCoordinator from "./pages/signupcoordinator";
import StudentList from "./pages/studentlist";
import ProjectDetails from "./pages/projectdetails";
import GuideHome from "./pages/profileguide";
import LoginAdmin from "./pages/adminlogin";
import LoginGuide from "./pages/guidelogin";
import LoginCoordinator from "./pages/coordinatorlogin";
import SignupGuide from "./pages/signupguide";
import Calendar from "./pages/calendar";
// import StudentHome from "./pages/"
//import Timeline from "./pages/timeline";

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
          <Route path="/studentlogin" element={<LoginStudent />} />
          <Route path="/guidelogin" element={<LoginGuide />} />
          <Route path="/adminlogin" element={<LoginAdmin />} />
          <Route path="/coordinatorlogin" element={<LoginCoordinator />} />
          
          <Route path="/miniproject" element={<MiniList />} />
          <Route path="/mainproject" element={<MainList />} />
          <Route path="/projectsearch" element={<ProjectSearch />} />
          <Route path="/usertype" element={<UserType />} />
          <Route path="/calendar" element={<Calendar />} />
          {/* login page */}
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
          {/* SignUp */}
          <Route path="/coordinatorsignup" element={<SignupCoordinator />} />
          <Route path="/studentsignup" element={<SignupStudent />} />
          <Route path="/guidesignup" element={<SignupGuide />} />
          {/* Profiles */}
          <Route path="/guidehomepage" element={<GuideHome />} />
          {/* <Route path="/studenthomepage" element={<StudentHome />} /> */}
          {/* <Route path="/coordinatorhomepage" element={<CoordinatorHome />} /> */}
          <Route path="/adminhomepage" element={<AdminHome />} />
          {/* Team Create */}
          <Route path="/teamcreate" element={<TeamCreate />} />
          <Route path="/ studentlist" element={<StudentList />} />
          <Route path="/projectdetails" element={<ProjectDetails />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;




//<Route  path="/timeline" element={<Timeline />} />
//<Route path="/timepage" element={<Timeline />} />