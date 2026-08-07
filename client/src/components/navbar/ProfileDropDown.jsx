import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Bookmark,
  Settings,
  LogOut,
  BarChart3,
} from "lucide-react";

function DropDown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const items = [
    { icon: User, label: "My Profile", onClick: () => navigate("/profile") },
    { icon: BarChart3, label: "My Progress" },
    { icon: Bookmark, label: "Bookmarks" },
    { icon: Settings, label: "Settings", onClick: () => navigate("/settings") },
  ];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffa116] text-[13px] font-medium text-[#1a1a1a] cursor-pointer hover:opacity-90"
      >
        A
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-md border border-border bg-surface shadow-xl z-50">
          <div className="border-b border-border px-4 py-3">
            <p className="text-[13px] font-medium text-white">Akarsh Bhat</p>

            <p className="text-[11px] text-text-muted">@akarshb23</p>
          </div>

          <ul className="py-1">
            {items.map((item, i) => (
              <li
                key={i}
                onClick={() => {
                  item.onClick && item.onClick();
                  setOpen(false);
                }}
                className="flex cursor-pointer items-center gap-3 px-4 py-2 text-[13px] text-text-primary hover:bg-[#3a3a3a]"
              >
                <item.icon size={14} className="text-text-muted" />
                {item.label}
              </li>
            ))}

            <hr className="my-1 border-border" />

            <li className="flex cursor-pointer items-center gap-3 px-4 py-2 text-[13px] text-red-500 hover:bg-[#3a3a3a]">
              <LogOut size={14} />
              Sign Out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDown;
