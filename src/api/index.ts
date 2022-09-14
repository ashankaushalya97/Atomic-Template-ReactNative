import API from './API';
import config from '../config';

const {
  api: {
    domains: {users},
  },
} = config;

const Api = {
  login: (id: string) => {
    return API.GET(`${users}/login`, {});
  },
};

export default Api;
