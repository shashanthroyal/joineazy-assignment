import React from "react";
import AssignmentCard from "./AssignmentCard";
import ProgressBar from "../common/ProgressBar";

export default function StudentDashboard({ user, assignments, submissions, setStudentStatus }) {
  const myAssignments = assignments.filter(a => a.id in assignments.map(asg => asg.id));
  const total = myAssignments.length;
  const done = myAssignments.filter(a => submissions[a.id]?.[user.id]?.confirmed).length;
  const percent = total ? Math.round((done / total) * 100) : 0;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Welcome, {user.name}</h2>
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm text-gray-500">{done}/{total} submitted</p>
          <ProgressBar percent={percent} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {myAssignments.map(a => (
          <AssignmentCard
            key={a.id}
            assignment={a}
            studentId={user.id}
            submission={submissions[a.id]?.[user.id]}
            onConfirmSubmission={(aid, sid) =>
              setStudentStatus(aid, sid, { confirmed: true })
            }
          />
        ))}
      </div>
    </div>
  );
}
