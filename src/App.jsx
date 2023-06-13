import Login from './pages/loginpage';
import Home from './pages/homepage';
import React from 'react';
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/pages/loginpage" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
