import Cookies from 'js-cookie'

export const SaveToken = ({token}) => {
    Cookies.set('token', token);
}

export const GetToken = () => {
    const token = Cookies.get('token');
    return token;
}

export const RemoveToken = ({token}) => {
    Cookies.remove(token);
}