import React from "react";
import ProgressBar from "../common/ProgressBar";

function AdminDashboard({ user, assignments, submissions}) {
  const myAssignments = assignments.filter(a => a.createdBy === user.id);

  return (
    <div className="space-y-6">
      {myAssignments.map(a => {
        const total = a.assignedTo.length;
        const done = a.assignedTo.filter(s => submissions[a.id]?.[s]?.confirmed).length;
        const percent = total ? (done / total) * 100 : 0;

        return (
          <div key={a.id} className="p-4 border bg-white rounded shadow-sm">
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold">{a.title}</h3>
                <p className="text-sm text-gray-500">{a.description}</p>
              </div>
              <div className="w-48">
                <ProgressBar percent={percent} />
                <p className="text-xs text-gray-500">{done}/{total} submitted</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AdminDashboard;