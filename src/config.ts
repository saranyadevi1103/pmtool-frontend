// config.ts
// Central place to manage all environment-based configs

export const BACKEND_URL: string =
  import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

// Future configs can go here:
// export const ANALYTICS_KEY = import.meta.env.VITE_ANALYTICS_KEY;
