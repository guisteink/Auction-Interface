import { create } from 'axios';

const base = "https://3wryt6tofe.execute-api.eu-west-1.amazonaws.com/dev/"
// const base = "https://auctionapp.us.auth0.com/"

const api = create({
    baseURL: base,
});

api.interceptors.request.use((request) =>
{
    const token = localStorage.getItem('token');

    if (token) {
        request.headers['x-access-token'] = localStorage.getItem('token');
        request.headers['Authorization'] = 'Bearer'+localStorage.getItem('token');
    }

    request.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    request.headers['Access-Control-Allow-Credentials'] = true
    request.headers['Access-Control-Allow-Origin'] = '*'
    request.headers['Access-Control-Allow-Methods'] = '*'

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

const getMyAuctions = async () =>
{
    return api.get(`/my-auctions/`)
}

const login = async () =>
{
    return api.post(`/oauth/token/`)
}

export default {
    getAllAuctions,
    getMyAuctions,
    login
}