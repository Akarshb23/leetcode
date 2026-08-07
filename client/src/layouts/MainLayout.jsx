import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/navbar/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";

function MainLayout() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Navbar />

      <main className="mx-auto min-h-[calc(100vh-64px)] max-w-[1280px] px-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;