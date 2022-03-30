export default function isAuthenticated()
{
    return window.localStorage.getItem('accessToken') ? window.localStorage.getItem('accessToken') : undefined
}