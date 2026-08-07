import React from "react";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

function LoginForm() {
  return (
    <form className="space-y-4">
      <div>
        <Input type="email" placeholder="Email or Username" />
      </div>

      <div>
        <Input type="password" placeholder="Password" />

        <div className="mt-1.5 text-right">
          <a href="#" className="text-[12px] text-[#4ea1ff] hover:underline">
            Forgot password?
          </a>
        </div>
      </div>

      <Button type="submit" variant="primary" className="w-full !h-10 !text-[14px]">
        Sign In
      </Button>
    </form>
  );
}

export default LoginForm;
