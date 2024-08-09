import { axiosClient } from "../axios-client";

export const getCategories = async () => {
  const res = await axiosClient.get(`/danh-mucs?populate=*`);
  return res.data;
};

export const getCategoryById = async (id) => {
  const res = await axiosClient.get(`/danh-mucs/${id}?populate=*`);
  return res.data;
};
