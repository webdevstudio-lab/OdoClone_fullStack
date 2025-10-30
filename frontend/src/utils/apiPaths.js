import API from "./axiosInstance";

//AUTH API

export const register = async (data) => {
  const response = await API.post("/auth/sign-up", data);
  return response;
};

export const login = async (data) => {
  const response = await API.post("/auth/sign-in", data);
  return response;
};

export const logout = async () => {
  const response = await API.get("/auth/logout");
  return response;
};

export const activate = async (data) => {
  const response = await API.post(`/auth/activate/${data.userId}`, {
    code: data.code,
  });
  return response;
};

//USER API

export const getCurentUser = async () => {
  const response = await API.get("/user/me");
  return response;
};

export const updateCurrentUser = async (data, id) => {
  const response = await API.put(`/update-user/${id}`, data);
  return response;
};

export const deleteUser = async (id) => {
  const response = await API.delete(`/delete-user/${id}`);
  return response;
};

export const getAllUsers = async () => {
  const response = await API.get("/user/all-users");
  return response;
};

//CLIENT API

//DEVIS API

//FACTURE API

//PROFILE API

//BON DE COMMANDE API
