import axios from 'axios';

export const jsonApi = axios.create({
    baseURL: 'https://json-server-geek-group.onrender.com',
    timeout: 10000,
});

export const movieApi = axios.create({
    baseURL: '',
    timeout: 6000,
});
