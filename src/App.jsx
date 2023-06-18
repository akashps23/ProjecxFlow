import Login from "./pages/loginpage";
import Home from "./pages/homepage";
// <<<<<<< Updated upstream
import UserType from "./pages/selectingtype";
// <<<<<<< Updated upstream
import MiniList from "./pages/miniprojectlist";
import MainList from "./pages/mainprojectlist";
import ProjectSearch from "./pages/projectsearch";
import ForgotPassword from "./pages/forgotpassword";
// =======
// =======
import adminprofile from "./pages/adminprofile";

// >>>>>>> Stashed changes
// >>>>>>> Stashed changes
import React from "react";
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
          <Route path="/src/pages/mainprojectlist.jsx" element={<MainList />} />
          <Route
            path="/src/pages/miniprojectlist.jsx"
            element={<MiniList />}
          ></Route>
          <Route
            path="/src/pages/projectsearch.jsx"
            element={<ProjectSearch />}
          />
          <Route
            path="/src/pages/forgotpassword.jsx"
            element={<ForgotPassword />}
          />
          ======= =======
          <Route exact path="/" element={<adminprofile />} />
          <Route path="/src/pages/loginpage.jsx" element={<Home />} />
          <Route
            path="/src/pages/adminprofile.jsx"
            element={<adminprofile />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
