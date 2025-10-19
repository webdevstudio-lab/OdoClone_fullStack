import axios from 'axios';
import { BASE_URL } from './apiPaths';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 80000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

//Request interceptors
axiosInstance.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem('_odooClone_Access_Token');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//Response interceptors
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    //Handle common errors globally
    if (error.response) {
      if (error.response.status === 500) {
        console.error('Server Error, Please try again later');
      }
    } else if (error.code === 'ECONNABORTED') {
      console.error('Request Timeout, Please try again later');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
