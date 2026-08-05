import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Problems from "../pages/Problems/Problems";
import ProblemDetails from "../pages/ProblemDetails/ProblemDetails";
import Contests from "../pages/Contests/Contests";
import ContestDetails from "../pages/ContestDetails/ContestDetails";
import Discuss from "../pages/Discuss/Discuss";
import Profile from "../pages/Profile/Profile";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
   
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/problems" element={<Problems />} />
          <Route
            path="/problems/:problemId"
            element={<ProblemDetails />}
          />

          <Route path="/contests" element={<Contests />} />
          <Route
            path="/contests/:contestId"
            element={<ContestDetails />}
          />

          <Route path="/discuss" element={<Discuss />} />

          <Route path="/profile" element={<Profile />} />

          {/* <Route path="/settings" element={<Settings />} /> */}
        </Route>

      
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

     
        {/* <Route path="/admin" element={<Admin />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;