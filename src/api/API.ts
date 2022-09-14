import axios from 'axios';
import config from '../config';

const {env} = config;

const NO_CONTENT = 204;
const UNAUTHORIZED = 401;

const axiosInstance = axios.create({
  baseURL: env,
  timeout: 1000,
  headers: {},
});

const makeRequest = (
  path: string,
  type: 'get' | 'post' | 'put' | 'delete',
  data: any,
  options = {},
) => {
  return axiosInstance({
    method: type,
    url: path,
    data: data,
  });
};

const BaseAPI = {
  GET(path: string, data: any, options = {}) {
    return makeRequest(path, 'get', {}, options);
  },
  POST(path: string, data: any, options = {}) {
    return makeRequest(path, 'post', {}, options);
  },
  PUT(path: string, data: any, options = {}) {
    return makeRequest(path, 'put', {}, options);
  },
  DELETE(path: string, data: any, options = {}) {
    return makeRequest(path, 'delete', {}, options);
  },
};

export default BaseAPI;
