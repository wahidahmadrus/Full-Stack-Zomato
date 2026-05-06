const configuredApiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const API_BASE_URL = configuredApiUrl.replace(/\/$/, '');

export const apiUrl = (path) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${API_BASE_URL}${normalizedPath}`;
};
