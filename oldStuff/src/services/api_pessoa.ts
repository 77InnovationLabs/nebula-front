import axios from 'axios';

const api_pessoa = axios.create({
  baseURL: process.env.API_PESSOA_URL || "http://localhost:8081",
});

export default api_pessoa;
