import React from "react";

function ConfirmModal({ open, onClose, onConfirm, title, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        <div className="mb-4">{children}</div>
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded border">Cancel</button>
          <button onClick={onConfirm} className="px-4 py-2 rounded bg-blue-600 text-white">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default  ConfirmModal;