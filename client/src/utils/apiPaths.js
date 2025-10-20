export const BASE_URL = 'http://localhost:5500/api';

export const API_PATHS = {
  AUTH: {
    SIGNUP: `/auth/sign-up`,
    ACTIVATE: id => `/auth/activate`,
    LOGIN: `/auth/sign-in`,
    LOGOUT: `/auth/logout`,
    REFRESH: `/auth/refresh`,
  },

  USER: {
    GET_ALL: `/users/all-users`,
    GET_PROFILE: `/users/me`,
    CREATE: `/users`,
    UPDATE: id => `/users/update-user/${id}`,
    DELETE: id => `/users/delete-user/${id}`,
  },

  CLIENT: {
    GET_ALL: `/client`,
    GET_ONE: id => `/client/${id}`,
    CREATE: `/client/create`,
    UPDATE: id => `/client/update/${id}`,
    DELETE: id => `/client/${id}`,
  },
};
