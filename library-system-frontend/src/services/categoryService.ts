import axios from "axios";

const API = "http://localhost:8080/api/categories";

export const getCategories = () => {
  const token = localStorage.getItem("token");

  return axios.get(API, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};