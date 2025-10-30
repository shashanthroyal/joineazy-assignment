import React, { useState } from "react";
import ConfirmModal from "../common/ConfirmModal";

function AssignmentCard({ assignment, studentId, submission, onConfirmSubmission }) {
  const [open, setOpen] = useState(false);
  const status = submission?.confirmed ? "✅ Submitted" : "❌ Not Submitted";

  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <h3 className="font-semibold text-lg">{assignment.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{assignment.description}</p>
      <p className="text-xs text-gray-500 mb-1">Due: {assignment.dueDate}</p>

      <div className="flex justify-between items-center mt-3">
        <p className="text-xs text-gray-500">{status}</p>
        {!submission?.confirmed && (
          <button
            className="px-3 py-1 text-sm bg-green-600 text-white rounded"
            onClick={() => setOpen(true)}
          >
            Yes, I have submitted
          </button>
        )}
      </div>

      <ConfirmModal
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={() => {
          onConfirmSubmission(assignment.id, studentId);
          setOpen(false);
        }}
        title="Final Confirmation"
      >
        Are you sure you want to mark this as submitted?
      </ConfirmModal>
    </div>
  );
}

export default AssignmentCard;