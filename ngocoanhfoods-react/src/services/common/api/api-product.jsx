import { axiosClient } from "../axios-client";

export const getProducts = async () => {
  const res = await axiosClient.get(`/san-phams?populate=*`);
  return res.data;
};

export const getProductsByCategory = async (name) => {
  const res = await axiosClient.get(
    "/san-phams?[filters][categories][name][$in]=" + name + "&populate=*"
  );
  return res.data;
};

export const getProductsByIdCategory = async (id) => {
  const res = await axiosClient.get(
    `/san-phams?[filters][categories][id][$in]=${id}&populate=*`
  );
  return res.data;
};

export const findProductById = async (id) =>{
  const res = await axiosClient.get(`/san-phams/${id}?populate=*`);
  return res.data;
}