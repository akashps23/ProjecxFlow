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
          <Route exact path="/" element={<Home />} />
          <Route path="/src/pages/loginpage.jsx" element={<Login />} />
          <Route path="/src/pages/miniprojectlist.jsx" element={<MiniList />} />
          <Route path="/src/pages/selectingtype.jsx" element={<UserType />} />
          <Route
            path="/src/pages/adminprofile.jsx"
            element={<AdminProfile />}
          />
          <Route path="/src/pages/mainprojectlist.jsx" element={<MainList />} />

          <Route
            path="/src/pages/forgotpassword.jsx"
            element={<ForgotPassword />}
          />
          <Route
            path="/src/pages/projectsearch.jsx"
            element={<ProjectSearch />}
          />
          <Route path="/src/pages/selectingtype.jsx" element={<UserType />} />
          <Route path="/src/pages/signup.jsx" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
