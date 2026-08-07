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
import Settings from "../pages/Settings/Settings";

import AdminDashboard from "../pages/Admin/Dashboard";
import AdminProblems from "../pages/Admin/ManageProblems";
import AdminCreateProblem from "../pages/Admin/CreateProblem";
import AdminEditProblem from "../pages/Admin/EditProblem";
import AdminUsers from "../pages/Admin/ManageUsers";
import AdminContests from "../pages/Admin/ManageContests";
import AdminReports from "../pages/Admin/Reports";

import NotFound from "./NotFound";

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
          <Route path="/settings" element={<Settings />} />

          {/* Admin */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/problems" element={<AdminProblems />} />
          <Route path="/admin/create-problem" element={<AdminCreateProblem />} />
          <Route
            path="/admin/edit-problem/:id"
            element={<AdminEditProblem />}
          />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/contests" element={<AdminContests />} />
          <Route path="/admin/reports" element={<AdminReports />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
