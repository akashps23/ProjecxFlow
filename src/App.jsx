import Login from "./pages/loginpage";
import Home from "./pages/homepage";
import UserType from "./pages/selectingtype";
import AdminProfile from "./pages/adminprofile";
import SignUp from "./pages/signup";
import MiniList from "./pages/miniprojectlist";
import MainList from "./pages/mainprojectlist";
import ProjectSearch from "./pages/projectsearch";
import ForgotPassword from "./pages/forgotpassword";
import teamcreate from "./pages/teamcreate";

import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeamCreate from "./pages/teamcreate";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route exact path="/" element={<TeamCreate />} />
=======
          <Route exact path="/" element={<SignUp />} />
>>>>>>> c7e17b13e0ca951ecf73261253786e08001bae4a
          <Route path="/src/pages/loginpage.jsx" element={<Login />} />
          <Route path="/src/pages/miniprojectlist.jsx" element={<MiniList />} />
          <Route path="/src/pages/selectingtype.jsx" element={<UserType />} />
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
<<<<<<< HEAD
          <Route path="/src/pages/signup.jsx" element={<SignUp />} />
          {/* <Route path="/src/pages/teamcreate.jsx" element={<TeamCreate />} /> */}
=======
          
         
>>>>>>> c7e17b13e0ca951ecf73261253786e08001bae4a
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
