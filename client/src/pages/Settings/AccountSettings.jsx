import React from "react";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

function AccountSettings() {
  return (
    <div className="rounded-lg border border-[#2e2e2e] bg-[#262626]">
      <div className="border-b border-[#2e2e2e] px-5 py-3">
        <h2 className="text-[14px] font-medium uppercase tracking-wide text-text-muted">
          Account
        </h2>
      </div>

      <div className="space-y-4 p-5">
        <Input placeholder="Username" defaultValue="akarshb23" />

        <Input placeholder="Email" defaultValue="akarsh@example.com" />

        <div className="flex justify-end">
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;
