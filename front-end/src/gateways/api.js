import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_KURL
});

export const chatRequest = async (message) => {
    const response = await instance.get('/chat', message);
    return response.data;
};
