import { axiosClient } from "../axios-client"

export const getSliders = async() =>{
    const res = await axiosClient.get(`/sliders?populate=*`);
    return res.data;
}