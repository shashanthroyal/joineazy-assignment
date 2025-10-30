import React from "react";

function ProgressBar({ percent = 0 }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div
        className="h-3 bg-blue-600 rounded-full transition-all"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
