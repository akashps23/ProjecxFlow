import Login from "./pages/loginpage";
import Home from "./pages/homepage";
import UserType from "./pages/selectingtype";
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
          <Route path="/src/pages/selectingtype.jsx" element={<UserType />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
