import axios from 'axios';

import env from '@config/env';

const setAuthToken = (token: string) => {
  if(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return;
  }
  
  delete axios.defaults.headers.common['Authorization'];
}

const externalAPI = axios.create({
  baseURL: env.EXTERNAL_URL,
  timeout: 1000,
  headers: {
    'Accept':'application/json',
  }
});

export {
  externalAPI,
  setAuthToken,
}