import React, { useState } from "react";

function AssignmentManager({ users, addAssignment, user, assignments }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");
  const [assignTo, setAssignTo] = useState([]);

  const toggleStudent = id =>
    setAssignTo(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  const create = () => {
    if (!title || !desc) return alert("Please fill all fields");
    if (assignTo.length === 0) return alert("Please select at least one student");
    
    const newId = assignments ? Math.max(...assignments.map(a => a.id)) + 1 : 1;
    addAssignment({
      id: newId,
      title,
      description: desc,
      dueDate: new Date().toISOString().slice(0, 10),
      driveLink: link,
      createdBy: user.id,
      assignedTo: assignTo
    });
    setTitle(""); setDesc(""); setLink(""); setAssignTo([]);
  };

  return (
    <div className="p-4 border rounded bg-white shadow-sm">
      <h3 className="font-semibold mb-3">Create Assignment</h3>
      <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" className="border p-2 w-full mb-2 rounded" />
      <textarea value={desc} onChange={e=>setDesc(e.target.value)} placeholder="Description" className="border p-2 w-full mb-2 rounded" />
      <div className="mb-3 flex flex-row gap-2  ">
        <p className="text-sm mb-1">Assign to:</p>
        {users.filter(u=>u.role==="student").map(s => (
          <label key={s.id} className="block text-sm">
            <input type="checkbox" checked={assignTo.includes(s.id)} onChange={() => toggleStudent(s.id)} /> {s.name}
          </label>
        ))}
      </div>
      <button onClick={create} className="bg-blue-600 text-white px-3 py-2 rounded">Create</button>
    </div>
  );
}

export default AssignmentManager;