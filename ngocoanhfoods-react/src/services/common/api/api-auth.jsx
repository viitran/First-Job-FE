import { axiosClient } from "../axios-client";

export const registerUser = async (username, email, password) => {
  const res = await axiosClient.post(`/auth/local/register`, {
    username: username,
    email: email,
    password: password,
  });
  return res.data;
};

export const signIn = async (email, password) => {
  const res = await axiosClient.post(`/auth/local`, {
    identifier: email,
    password: password,
  });
  return res.data;
};

export const addToCart = async (data, jwt) => {
  const res = await axiosClient.post(`/gio-hangs`, data, {
    headers: {
      Authorization: "Bearer " + jwt,
      "Content-Type": "application/json",
    },
  });
  return res.data;
};

export const getCartItems = async (userId, jwt) => {
  const res = await axiosClient.get(
    `/gio-hangs?filters[userId][$eq]=${userId}&populate=*`,
    {
      headers: {
        Authorization: "Bearer " + jwt,
      },
    }
  );
  return res.data;
};

// check spham ton tai trong gio hang cua user chua
export const checkProductOnCart = async (productId, userId, jwt) => {
  const res = await axiosClient.get(
    `/gio-hangs?product=${productId}&userId=${userId}`,
    {
      headers: {
        Authorization: "Bearer " + jwt,
      },
    }
  );
  return res.data;
};

// tang so luong sp
export const updateProductOnCart = async (quantity, cartId, jwt) => {
  const res = await axiosClient.put(
    `/gio-hangs/${cartId}`,
    JSON.stringify({ data: { quantity } }),
    {
      headers: {
        Authorization: "Bearer " + jwt,
      },
    }
  );
  return res.data;
};

//lay thong tin nguoi dung
export const getInformationUser = async (jwt) => {
  const res = await axiosClient.get(`/users/me?populate=*`, {
    headers: {
      Authorization: "Bearer " + jwt,
      "Content-Type": "application/json",
    },
  });
  return res.data;
};

// lay cac spham trong gio hang cua nguoi dung
export const getListCart = async (userId, jwt) => {
  const res = await axiosClient.get(
    `/gio-hangs?filters[userId][$eq]=${userId}&[populate][products][populate][image][fields]=url`,
    {
      headers: {
        Authorization: "Bearer " + jwt,
      },
    }
  );
  return res.data;
};

export const getCart = async (jwt) => {
  const res = await axiosClient.get(`/gio-hangs?populate=*`, {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  });
  return res.data;
};
