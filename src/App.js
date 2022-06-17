import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

//components
import SignUp from "./components/SignUp";
import Login from "./components/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate replace to="/signup" />} />
    </Routes>
  );
};

export default App;
