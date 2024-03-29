import Axios from 'axios';

const API = 'http://localhost:8070/';
const AUTH = 'http://localhost:8080/';

export const authAxiosInstance = Axios.default.create({ baseURL: AUTH, rejectUnauthorized: false, requestCert: false, agent: false});
export const apiAxiosInstance = Axios.default.create({ baseURL: API, rejectUnauthorized: false, requestCert: false, agent: false });

export const SignInCall = (data) => authAxiosInstance.post('api/Auth/Login/login/', data);
export const SignUpCall = (data) => authAxiosInstance.post('api/Auth/Register/register/', data);
export const VerifyToken = (data) => authAxiosInstance.post('api/token/VerifyToken/verifyToken', data);

export const GetTasks = (data, token) => apiAxiosInstance.post('data/Task/Get', {data: data, token: token});
/*
export const GetTaskById = apiAxiosInstance.post('data/Task/GetById');
export const PostTask = apiAxiosInstance.post('data/Task/Post');
export const DeleteTask = apiAxiosInstance.post('data/Task/Delete');
export const UpdateTask = apiAxiosInstance.post('data/Task/Update');

export const GetTaskSets = apiAxiosInstance.post('data/TaskSet/GetAll');
export const GetTaskSetById = apiAxiosInstance.post('data/TaskSet/GetById');
export const DeleteTaskSet = apiAxiosInstance.post('data/TaskSet/Delete');
export const PostTaskSet = apiAxiosInstance.post('data/TaskSet/Post');
export const UpdateTaskSet = apiAxiosInstance.post('data/TaskSet/Update');
*/