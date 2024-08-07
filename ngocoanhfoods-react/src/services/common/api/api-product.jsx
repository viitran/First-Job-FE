import { axiosClient } from "../axios-client";

export const getProducts = async () => {
  const res = await axiosClient.get(`/api/san-phams?populate=*`);
  return res.data;
};

export const getProductsByIdCategory = async (id) => {
  const res = await axiosClient.get(`/api/san-phams/${id}?populate=*`);
  return res.data;
};
