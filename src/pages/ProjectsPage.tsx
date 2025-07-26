import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import TimelineStrip from "../components/TimelineStrip";
import CommentBubble from "../components/CommentBubble";

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#d1a0ff49] p-6 text-[#0f172a] font-sans">
      {/* Header & Navigation */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">📁 Project: {id}</h1>
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-white text-[#0f172a] px-4 py-2 rounded hover:bg-[#dbeafe] shadow"
        >
          ← Back to Dashboard
        </button>
      </div>

      {/* Project Description */}
      <textarea
        className="w-full p-4 mb-4 rounded border shadow bg-white"
        placeholder="Add project description..."
      />

      {/* Metadata */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div>
          <label className="font-semibold">📅 Deadline</label>
          <input type="date" className="w-full p-2 rounded border shadow bg-white" />
        </div>
        <div>
          <label className="font-semibold">📌 Status</label>
          <select className="w-full p-2 rounded border shadow bg-white">
            <option>Planning</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>
        <div>
          <label className="font-semibold">🏷️ Tags</label>
          <div className="flex gap-2 mt-2">
            <span className="bg-[#c91aa0] px-3 py-1 rounded-full text-xs">UI/UX</span>
            <span className="bg-[#ffbfbf] px-3 py-1 rounded-full text-xs">Frontend</span>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="mb-6">
        <h2 className="font-semibold mb-2">👥 Team Members</h2>
        <div className="flex gap-3">
          {["Saranya", "Ravi", "Priya"].map((member) => (
            <div
              key={member}
              className="bg-white px-4 py-2 rounded-full shadow text-sm"
            >
              {member}
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <h2 className="font-semibold mb-2">📈 Progress</h2>
        <div className="h-3 bg-gray-300 rounded-full">
          <div className="h-full bg-[#603885] w-2/3 rounded-full" />
        </div>
        <p className="text-sm mt-1">66% complete</p>
      </div>

      {/* Task List */}
      <div className="mb-6">
        <h2 className="font-semibold mb-2">🧩 Tasks</h2>
        <input
          className="w-full p-2 mb-3 rounded border bg-white"
          placeholder="🔍 Filter by priority or status..."
        />
        <ul className="space-y-2">
          <li className="bg-white p-3 rounded shadow flex justify-between">
            <span>Design login page</span>
            <span className="bg-[#bd00ab] px-2 py-1 rounded text-xs">High</span>
          </li>
          <li className="bg-white p-3 rounded shadow flex justify-between">
            <span>Set up database</span>
            <span className="bg-[#feffb6] px-2 py-1 rounded text-xs">Medium</span>
          </li>
        </ul>
        <button
          onClick={() => navigate(`/task/task-${Date.now()}`)}
          className="mt-4 bg-white px-4 py-2 rounded shadow hover:bg-[#e3f2fd]"
        >
          + Create Task
        </button>
      </div>

      {/* Comments */}
      <div className="mb-6">
        <h2 className="font-semibold mb-2">💬 Comments</h2>
        <CommentBubble user="Ravi" text="API routes are live!" />
        <CommentBubble user="Saranya" text="Dashboard layout is complete 🎉" />
        <textarea
          className="mt-3 w-full p-2 rounded border bg-white"
          placeholder="Add a comment..."
        />
      </div>

      {/* File Uploads */}
      <div className="mb-6">
        <h2 className="font-semibold mb-2">📎 Files</h2>
        <ul className="text-sm list-disc ml-6 bg-white p-4 rounded shadow">
          <li>Mockups.png</li>
          <li>Specs.docx</li>
        </ul>
      </div>

      {/* Timeline */}
      <TimelineStrip label="🕒 Phase 1: July 10 → July 25" progressPercent={75} />

      {/* Activity Log */}
      <div className="mt-8 bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">📜 Activity Log</h2>
        <ul className="text-sm list-disc ml-6">
          <li>Task “Login UI” marked complete</li>
          <li>Priya added mockups.png</li>
          <li>Status changed to In Progress</li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectPage;