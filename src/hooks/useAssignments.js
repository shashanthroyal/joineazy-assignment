import { useState, useEffect } from "react";
import { assignments as initialAssignments } from "../data/Mock.js";

const STORAGE_KEY = "joineazy_submissions_v1";

function readStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({}));
    return {};
  }
  return JSON.parse(raw);
}

function useAssignments() {
  const [assignments, setAssignments] = useState(initialAssignments);
  const [submissions, setSubmissions] = useState(() => readStorage());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
  }, [submissions]);

  function setStudentStatus(assignmentId, studentId, payload) {
    setSubmissions(prev => {
      const next = { ...prev };
      if (!next[assignmentId]) next[assignmentId] = {};
      next[assignmentId][studentId] = {
        ...(next[assignmentId][studentId] || {}),
        ...payload
      };
      return next;
    });
  }

  function addAssignment(newAssignment) {
    setAssignments(prev => [newAssignment, ...prev]);
  }

  return { assignments, submissions, setStudentStatus, addAssignment };
}

export default useAssignments;