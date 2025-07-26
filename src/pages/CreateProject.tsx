// src/pages/CreateProject.tsx
import React, { useState } from 'react';

interface Project {
  id: number;
  name: string;
  description: string;
  status: string;
  teamMembers: string[];
}

const CreateProject: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [form, setForm] = useState({
    name: '',
    description: '',
    status: 'Not Started',
    teamMembers: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.description) return;

    const newProject: Project = {
      id: projects.length + 1,
      name: form.name,
      description: form.description,
      status: form.status,
      teamMembers: form.teamMembers.split(',').map((name) => name.trim()),
    };

    setProjects([...projects, newProject]);
    setForm({ name: '', description: '', status: 'Not Started', teamMembers: '' });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold">🚀 Create New Project</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow">
        <input
          type="text"
          name="name"
          placeholder="Project Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />

        <input
          type="text"
          name="description"
          placeholder="Project Description"
          value={form.description}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        >
          <option>Not Started</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <input
          type="text"
          name="teamMembers"
          placeholder="Team Members (comma separated)"
          value={form.teamMembers}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create Project
        </button>
      </form>

      {/* List of Created Projects */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">📋 Project List</h2>
        {projects.map((project) => (
          <div key={project.id} className="border bg-gray-50 p-4 rounded-xl shadow">
            <h3 className="text-lg font-bold">{project.name}</h3>
            <p>{project.description}</p>
            <p><strong>Status:</strong> {project.status}</p>
            <p><strong>Team:</strong> {project.teamMembers.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateProject;
