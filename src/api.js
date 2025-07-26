const API = import.meta.env.VITE_API_URL;

export const loginUser = async (email, password) => {
  const response = await fetch(`${API}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
};

export const registerUser = async (name, email, password) => {
  const response = await fetch(`${API}/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  return response.json();
};

// Add more API functions here (projects, tasks, etc.)
