
import axios from 'axios';

import env from './env';

axios.defaults.baseURL = env.BASE_URL;
axios.defaults.headers.get['Accept'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';