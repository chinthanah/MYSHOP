import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screen/Home ";
import Food from "./screen/Food";
import Pharma from "./screen/Pharma";
import Entry from "./screen/Entry";
import Signin from "./screen/Signin";
import Login from "./screen/Login";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Entry />} />
          <Route path="/createuser" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/food" element={<Food />} />
          <Route path="/pharma" element={<Pharma />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
