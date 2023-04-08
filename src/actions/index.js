import axios from "axios";
import {GetTasks, SignInCall, SignUpCall, VerifyToken} from "../api/apiCalls";
import {GetToken, GetUserId, RemoveToken} from "../api/auth/AuthHelper";

export const signout = () => (dispatch) => {
    dispatch({type: "SIGN_OUT"});
}

export const register = (username, password) => (dispatch) => {
    dispatch({ type: "REGISTER_REQ" });

    return SignUpCall({UserName: username, Password: password})
        .then(payload => {
            console.log(payload);
            dispatch({type: "REGISTER_SUCC", payload})
        })
        .catch(exception => {
            console.log(exception.message)
            dispatch({type: "ERROR", exceptionMessage: exception.message})
        });
};

export const login = (username, password) => (dispatch) => {
    dispatch({ type: "LOGIN_REQ" });
    return SignInCall({UserName: username, Password: password})
        .then(payload => {
            dispatch({type: "LOGIN_SUCC", payload})
        })
        .catch(exception => {
            dispatch({type: "ERROR", exceptionMessage: exception.message})
        });
};

export const checkToken = () => (dispatch) => {
    dispatch({type: "RESCTRICTED_AREA"})
    const token = GetToken();
    const userId = GetUserId();
    if(token == null || userId == null) return;
    return VerifyToken({token: token, userid: userId})
        .then(payload => {
            dispatch({type: "RESCTRICTED_AREA_RES", payload})
        })
        .catch(exception => {
            dispatch({type: "ERROR", exceptionMessage: exception.message});
        })
}

export const getTasks = () => (dispatch) => {
    console.log("MANAGER 1")

    dispatch({type: "LOADING_ON"})
    const token = GetToken();
    const userId = GetUserId();
    if(token == null || userId == null) return;
    return GetTasks({data: "", userId: userId}, token)
        .then(payload => {
            dispatch({type: "GET_TASKS_RES", payload})
        })
        .catch(exception => {
            dispatch({type: "ERROR", exceptionMessage: exception.message})
        })
}

export const resetFlash = () => {
    return {
        type: "FLASH_RESET"
    };
};