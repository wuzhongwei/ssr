import axios from 'axios';
import config from '../config';
const instance = (ctx) => {
    return axios.create({
        baseURL: 'http://47.95.113.63/ssr',
        headers: {
            cookie: ctx.get('cookie')
        },
        ...config
    });
} 

export default instance;