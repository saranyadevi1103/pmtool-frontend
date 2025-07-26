import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import CommentBubble from "../components/CommentBubble";

const TaskPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#ffe0f046] p-6 text-[#1f2937] font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">📝 Task: {id}</h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-white text-[#e295b5] px-4 py-2 rounded hover:bg-[#fcd5e8]"
        >
          ← Back
        </button>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block font-semibold mb-1">Assigned To</label>
          <div className="flex items-center gap-2">
            <span className="text-[20px]" title="Saranya - Frontend Developer">👩‍💻</span>
            <span>Saranya (Developer)</span>
          </div>
        </div>
        <div>
          <label className="block font-semibold mb-1">Deadline</label>
          <input type="date" className="p-2 rounded border w-full" />
        </div>
        <div>
          <label className="block font-semibold mb-1">Status</label>
          <select className="p-2 rounded border w-full">
            <option>To Do</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>
        </div>
      </div>

      {/* Priority & Tags */}
      <div className="flex gap-4 mb-6">
        <span className="bg-[#ffb3c6] px-3 py-1 rounded-full text-sm">High Priority</span>
        <span className="bg-[#fdffb6] px-3 py-1 rounded-full text-sm">Frontend</span>
      </div>

      {/* Description */}
      <textarea
        className="w-full p-4 rounded-lg border bg-white mb-6"
        placeholder="Add task details..."
      />

      {/* Checklist */}
      <div className="mb-6">
        <h2 className="font-semibold mb-2">📋 Subtasks</h2>
        {["Wireframe", "API Flow", "Responsive Testing"].map((item, i) => (
          <label key={i} className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-pink-500" />
            {item}
          </label>
        ))}
      </div>

      {/* Comments */}
      <div className="mb-6">
        <h2 className="font-semibold mb-2">💬 Comments</h2>
        <div className="space-y-2">
          <CommentBubble user="Ravi" text="API updated 🧪" />
          <CommentBubble user="Saranya" text="Mobile layout complete!" />
        </div>
        <textarea
          className="mt-3 p-2 border rounded w-full"
          placeholder="Add a comment..."
        />
      </div>

      {/* Files */}
      <div className="mb-6">
        <h2 className="font-semibold mb-2">📎 Attachments</h2>
        <ul className="text-sm list-disc ml-6 bg-white p-4 rounded shadow">
          <li>ButtonLayout.png</li>
          <li>TaskReview.docx</li>
        </ul>
      </div>

      {/* Time & Actions */}
      <div className="mb-6">
        <h2 className="font-semibold mb-2">⏱️ Time Tracker</h2>
        <p className="text-sm mb-2">Time Spent: 1h 15m</p>
        <button className="bg-[#a0c4ff] text-white px-4 py-2 rounded hover:bg-[#8bb0e8]">
          ✅ Mark as Complete
        </button>
      </div>

      {/* Activity Log */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">📜 Activity Log</h2>
        <ul className="text-sm list-disc ml-6">
          <li>Assigned to Saranya</li>
          <li>Priority set to High</li>
          <li>Comment from Ravi</li>
        </ul>
      </div>
    </div>
  );
};

export default TaskPage;
