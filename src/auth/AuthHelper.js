import Cookies from 'js-cookie'

export const SaveToken = (token) => {
    console.log("TOKEN:")
    console.log(token);
    Cookies.set('token', token);
}

export const GetToken = () => {
    const token = Cookies.get('token');
    return token;
}

export const RemoveToken = ({token}) => {
    Cookies.remove(token);
}