import axios from 'axios';
export const api = axios.create({ baseURL: 'http://localhost:4000/api' });

// PROJECTS
export const getProjects = () => api.get('/projects');
export const addProject = (data: { name: string }) => api.post('/projects', data);

// TASKS
export const getTasks = (projectId: string) => api.get(`/tasks/${projectId}`);
export const addTask = (data: { title: string; projectId: string }) =>
  api.post('/tasks', data);
export const toggleTask = (id: string) => api.patch(`/tasks/${id}/toggle`);
