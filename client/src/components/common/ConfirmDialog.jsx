import React from "react";
import Modal from "./Modal";
import Button from "./Button";

function ConfirmDialog({ open, title = "Are you sure?", message, onConfirm, onCancel }) {
  return (
    <Modal open={open} onClose={onCancel} title={title}>
      <p className="mb-5 text-[13px] text-text-secondary">{message}</p>

      <div className="flex justify-end gap-2">
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>

        <Button variant="danger" onClick={onConfirm}>
          Confirm
        </Button>
      </div>
    </Modal>
  );
}

export default ConfirmDialog;
