import React from "react";

const users = [
  { id: 1, name: "akarshb23", email: "akarsh@example.com", solved: 184 },
  { id: 2, name: "sara_codes", email: "sara@example.com", solved: 421 },
  { id: 3, name: "rahul_dsa", email: "rahul@example.com", solved: 198 },
];

function ManageUsers() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-6">
      <h1 className="text-[28px] font-semibold text-text-primary">
        Manage Users
      </h1>

      <div className="mt-5 overflow-hidden rounded-lg border border-border bg-surface">
        <div className="grid grid-cols-[1fr_1fr_120px_100px] border-b border-border bg-navbar px-5 py-2 text-[12px] uppercase text-text-muted">
          <span>Name</span>
          <span>Email</span>
          <span>Solved</span>
          <span>Action</span>
        </div>

        {users.map((u) => (
          <div
            key={u.id}
            className="grid grid-cols-[1fr_1fr_120px_100px] border-b border-border px-5 py-3 text-[14px] last:border-b-0"
          >
            <span className="text-text-primary">{u.name}</span>
            <span className="text-text-secondary">{u.email}</span>
            <span className="text-text-secondary">{u.solved}</span>
            <button className="text-left text-[#ff375f] hover:underline">
              Ban
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageUsers;
