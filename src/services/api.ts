import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL || "https://curso-service-app-9213072c1209.herokuapp.com",
});

export default api;
