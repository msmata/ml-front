import axios from "axios";

const apiClient = axios.create({baseURL: process.env.REACT_APP_BACKEND_URL, timeout: 5000});

export default apiClient;