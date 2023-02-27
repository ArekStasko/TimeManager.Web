import axios from "axios";
import {SignInCall, SignUpCall, VerifyToken} from "../api/apiCalls";
import {GetToken, GetUserId} from "../auth/AuthHelper";

export const signout = () => (dispatch) => dispatch({type: "SIGN_OUT"});

export const register = (username, password) => (dispatch) => {
    dispatch({ type: "REGISTER_REQ" });

    return SignUpCall({UserName: username, Password: password})
        .then(payload => {
            console.log(payload);
            dispatch({type: "REGISTER_SUCC", payload})
        })
        .catch(exception => {
            dispatch({type: "ERROR", exception})
        });
};

export const login = (username, password) => (dispatch) => {
    dispatch({ type: "LOGIN_REQ" });
    return SignInCall({UserName: username, Password: password})
        .then(payload => {
            dispatch({type: "LOGIN_SUCC", payload})
        })
        .catch(exception => {
            dispatch({type: "ERROR", exception})
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
            dispatch({type: "ERROR"}, exception);
        })
}

export const resetFlash = () => {
    return {
        type: "FLASH_RESET"
    };
};