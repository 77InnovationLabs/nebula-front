import axios from 'axios';

const api_pessoa = axios.create({
  baseURL: process.env.API_PESSOA_URL || "https://pessoa-service-app-d36d83336f62.herokuapp.com",
});

export default api_pessoa;
