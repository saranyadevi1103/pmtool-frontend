import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import TimelineStrip from "../components/TimelineStrip";
import RoleBadge from "../components/RoleBadge";

const DashboardPage = () => {
  const navigate = useNavigate();

  const projects = [
    { name: "Alpha", deadline: "Jul 25", progress: 66 },
    { name: "Beta", deadline: "Jul 30", progress: 80 },
    { name: "Gamma", deadline: "Aug 5", progress: 40 },
  ];

  const handleCreateProject = () => {
    const newId = `proj-${Date.now()}`;
    navigate(`/project/${newId}`);
  };

  const handleCreateTask = () => {
    const newId = `task-${Date.now()}`;
    navigate(`/task/${newId}`);
  };

  return (
    <div className="min-h-screen bg-[#fdf4ff] px-16 py-10 text-[#1f2937] font-sans max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">🌸 Dashboard</h1>
        <RoleBadge role="Manager" />
      </div>

      {/* Welcome & Actions */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Hello Saranya 👋</h2>
        <div className="flex gap-6">
          <button
            onClick={handleCreateProject}
            className="bg-[#a0c4ff] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#8bb0e8]"
          >
            + Create Project
          </button>
          <button
            onClick={handleCreateTask}
            className="bg-[#ffc6ff] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#e8b4e0]"
          >
            + Create Task
          </button>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
        <input
          className="w-full lg:w-2/3 px-4 py-3 rounded-lg border bg-white text-lg placeholder:text-gray-400"
          placeholder="🔍 Search projects or tasks..."
        />
        <select className="px-4 py-3 rounded-lg border bg-white text-lg">
          <option>All</option>
          <option>High Priority</option>
          <option>Due Soon</option>
        </select>
      </div>

      {/* Project Cards - Vertical Flow */}
      <div className="space-y-8">
        {projects.map((p) => (
          <div
            key={p.name}
            onClick={() => navigate(`/project/${p.name.toLowerCase()}`)}
            className="cursor-pointer"
          >
            <ProjectCard
              name={p.name}
              deadline={p.deadline}
              progress={p.progress}
            />
          </div>
        ))}
      </div>

      {/* Deadlines & Task Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">📅 Upcoming Deadlines</h3>
          <ul className="list-disc ml-5 text-base text-gray-700 space-y-2">
            <li>Finalize UI by Jul 20</li>
            <li>Connect backend by Jul 25</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">🛠️ Task Preview</h3>
          <ul className="space-y-2 text-base text-gray-700">
            <li>✔️ Saranya — Build dashboard layout</li>
            <li>🔧 Ravi — Setup API routes</li>
          </ul>
        </div>
      </div>

      {/* Timeline */}
      <TimelineStrip label="📆 Sprint Phase • Jul 10 → Jul 25" progressPercent={75} />

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 mt-16">
        <p>© 2025 ProjectManagerPro • Terms • Privacy • Help</p>
      </footer>
    </div>
  );
};

export default DashboardPage;