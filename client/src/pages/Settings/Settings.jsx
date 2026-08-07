import React from "react";
import AccountSettings from "./AccountSettings";
import PasswordSettings from "./PasswordSettings";
import ThemeSettings from "./ThemeSettings";

function Settings() {
  return (
    <div className="mx-auto max-w-[800px] px-6 py-6">
      <h1 className="text-[28px] font-semibold text-white">Settings</h1>

      <p className="mt-1 text-[13px] text-text-secondary">
        Manage your account settings and preferences.
      </p>

      <div className="mt-6 space-y-4">
        <AccountSettings />
        <PasswordSettings />
        <ThemeSettings />
      </div>
    </div>
  );
}

export default Settings;
