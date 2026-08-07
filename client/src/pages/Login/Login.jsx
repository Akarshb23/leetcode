import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1a1a1a] px-4">
      <div className="w-full max-w-[420px] rounded-lg border border-[#2e2e2e] bg-[#262626] p-8 shadow-2xl">
        <div className="mb-6 flex flex-col items-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-[#ffa116] text-white font-bold text-[24px]">
            L
          </div>

          <h1 className="text-center text-[22px] font-semibold text-white">
            Sign in to LeetCode
          </h1>
        </div>

        <LoginForm />

        <div className="mt-6 flex items-center gap-3 text-[12px] text-text-muted">
          <div className="h-px flex-1 bg-[#3a3a3a]" />
          OR
          <div className="h-px flex-1 bg-[#3a3a3a]" />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2">
          <button className="flex h-9 items-center justify-center gap-2 rounded-md border border-[#3a3a3a] bg-[#262626] text-[13px] text-text-primary hover:bg-[#3a3a3a] cursor-pointer">
            Google
          </button>

          <button className="flex h-9 items-center justify-center gap-2 rounded-md border border-[#3a3a3a] bg-[#262626] text-[13px] text-text-primary hover:bg-[#3a3a3a] cursor-pointer">
            GitHub
          </button>
        </div>

        <p className="mt-6 text-center text-[13px] text-text-secondary">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#4ea1ff] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
