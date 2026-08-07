import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";

function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1a1a1a] px-4">
      <div className="w-full max-w-[420px] rounded-lg border border-[#2e2e2e] bg-[#262626] p-8 shadow-2xl">
        <div className="mb-6 flex flex-col items-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-[#ffa116] text-white font-bold text-[24px]">
            L
          </div>

          <h1 className="text-center text-[22px] font-semibold text-white">
            Create Account
          </h1>

          <p className="mt-1 text-center text-[13px] text-text-secondary">
            Join LeetCode and start practicing.
          </p>
        </div>

        <RegisterForm />

        <p className="mt-6 text-center text-[13px] text-text-secondary">
          Already have an account?{" "}
          <Link to="/login" className="text-[#4ea1ff] hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
