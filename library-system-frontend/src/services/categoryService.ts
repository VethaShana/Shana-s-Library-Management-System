import axios from "axios";

const API = "http://localhost:8080/api/categories";

export const getCategories = () => {
  return axios.get(API);
};