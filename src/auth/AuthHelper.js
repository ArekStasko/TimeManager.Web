import Cookies from 'js-cookie'

export const SaveUserId = (userId) => {
    Cookies.set('userid', userId);
}
export const GetUserId = () => {
    const userId = Cookies.get('userid');
    return userId;
}

export const SaveToken = (token) => {
    Cookies.set('token', token);
}

export const GetToken = () => {
    const token = Cookies.get('token');
    return token;
}