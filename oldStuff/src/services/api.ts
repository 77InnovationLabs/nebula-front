import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL || "http://localhost:8083",
});

export default api;
