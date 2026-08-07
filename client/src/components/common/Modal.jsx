import React from "react";

function Modal({ open, onClose, title, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-[480px] max-w-[90%] rounded-lg border border-border bg-surface p-6 shadow-xl">
        {title && (
          <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
            <h3 className="text-[16px] font-medium text-text-primary">
              {title}
            </h3>

            <button
              onClick={onClose}
              className="text-text-muted hover:text-white"
            >
              ✕
            </button>
          </div>
        )}

        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
