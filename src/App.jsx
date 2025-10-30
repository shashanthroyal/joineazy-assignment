import React, { useState } from "react";
import { users } from "./data/Mock.js";
import useAssignments from "./hooks/useAssignments.js";
import StudentDashboard from "./components/student/StudentDashboard";
import AdminDashboard from "./components/admin/AdminDashboard";
import AssignmentManager from "./components/admin/AssignmentManager";

function App() {
  const { assignments, submissions, setStudentStatus, addAssignment } = useAssignments();
  const [userId, setUserId] = useState(1);
  const user = users.find(u => u.id === Number(userId)) || users[0];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="p-4 bg-blue-600 shadow flex justify-between items-center">
        <h1 className=" text-white font-bold text-2xl">Joineazy Assignment Dashboard</h1>
        <select value={userId} onChange={e => setUserId(Number(e.target.value))} className="border w-56 p-2 rounded">
          {users.map(u => (
            <option key={u.id} value={u.id}>{u.name} ({u.role})</option>
          ))}
        </select>
      </header>

      <main className="p-4">
        {user.role === 'student' && (
          <StudentDashboard user={user} assignments={assignments} submissions={submissions} setStudentStatus={setStudentStatus}/>
        )}
        {user.role === 'admin' && (
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <AdminDashboard user={user} assignments={assignments} submissions={submissions} users={users}/>
            </div>
            <AssignmentManager users={users} user={user} assignments={assignments} addAssignment={addAssignment}/>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
