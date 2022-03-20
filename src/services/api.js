import { create } from 'axios';

const base = "https://3wryt6tofe.execute-api.eu-west-1.amazonaws.com/dev/"

const api = create({
    baseURL: base,
});

api.interceptors.request.use((request) =>
{
    const token = localStorage.getItem('token');

    if (token) {
        request.headers['x-access-token'] = localStorage.getItem('token');
    }

    return request;
}, (error) =>
{
    console.log('error', error)
    return Promise.reject(error);
});

const getAllAuctions = async (status) =>
{
    return api.get(`/auctions${status && "?status=" + status}`)
}

export default {
    getAllAuctions
}