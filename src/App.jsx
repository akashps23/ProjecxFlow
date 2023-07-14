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
import ProjectDetails from "./pages/projectdetails";
// import Calendar from "./pages/calendar";
// import StudentHome from "./pages/"
//import Timeline from "./pages/timeline";

//features
import Miniproject from "./pages/miniprojectlist";
import Mainproject from "./pages/mainprojectlist";
import ProjectSearch from "./pages/projectsearch";
import Calendar from "./pages/calendar";
import Guidelist from "./pages/guidelist";
import MyProjects from "./pages/myprojects";
import GuidanceProject from "./pages/guidanceproject";
import Coordinatorlist from "./pages/coordinatorlist";
import History from "./pages/history";
import Projectlist from "./pages/projectlist";

//home profile
import AdminHome from "./pages/profileadmin";
import CoordinatorHome from "./pages/profilecoordinator";
import GuideHome from "./pages/profileguide";
import StudentHome from "./pages/profilestudent";
import Studentlist from "./pages/studentlist";
import MyguideProjects from "./pages/myguideprojects";


//announcement
import Announce from "./pages/makeannouncement";
import Announcements from "./pages/announcement";




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
          

          {/* features */}
          <Route path="/miniproject" element={<Miniproject />} />
          <Route path="/mainproject" element={<Mainproject />} />
          <Route path="/projectsearch" element={<ProjectSearch />} />
          <Route path="/teamcreate" element={<TeamCreate />} />
          
          <Route path="/studentlist" element={<Studentlist />} />
          <Route path="/guidelist" element={<Guidelist />} />
          <Route path="/myprojects" element={<MyProjects />} />
          <Route path="/guidanceproject" element={<GuidanceProject />} />
          <Route path="/coordinatorlist" element={<Coordinatorlist />} />
          <Route path="/projectlist" element={<Projectlist/>} />
          <Route path="/history" element={<History />} />
          <Route path="/myguideprojects" element={<MyguideProjects />} />

          {/* login pages */}
          <Route path="/usertype" element={<UserType />} />
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

          {/* SignUp Pages */}

          <Route path="/coordinatorsignup" element={<SignupCoordinator />} />
          <Route path="/studentsignup" element={<SignupStudent />} />
          <Route path="/guidesignup" element={<SignupGuide />} />

          {/* Home Pages */}
          <Route path="/adminhomepage" element={<AdminHome />} />
          {/* Team Create */}
          <Route path="/teamcreate" element={<TeamCreate />} />
          <Route path="/projectdetails" element={<ProjectDetails />} />
          <Route path="/calendar" element={<Calendar />} /> 
          
          <Route path="/guidehomepage" element={<GuideHome />} />
          <Route path="/studenthomepage" element={<StudentHome />} />
          <Route path="/coordinatorhomepage" element={<CoordinatorHome />} />
          <Route path="/makeannouncement" element={<Announce />} />
          <Route path="/announcements" element={<Announcements />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

/*<Route path="/makeannouncement" element={<Announce />} /> */