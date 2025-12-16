import axios from "axios";

const API_URL = "http://localhost:8080/api/users/auth";

export const registerUser = (data: any) => {
  return axios.post(`${API_URL}/register`, data);
};

export const loginUser = (data: any) => {
  return axios.post(`${API_URL}/login`, data);
};
