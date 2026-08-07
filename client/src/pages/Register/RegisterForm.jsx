import React from "react";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

function RegisterForm() {
  return (
    <form className="space-y-4">
      <Input type="text" placeholder="Username" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Confirm Password" />

      <Button type="submit" variant="primary" className="w-full !h-10 !text-[14px]">
        Sign Up
      </Button>
    </form>
  );
}

export default RegisterForm;
