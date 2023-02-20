import axios from "axios";
import {SignInCall, SignUpCall} from "../api/apiCalls";

export const logout = () => {
    return {
        type: 'LOGOUT_REQ',
    }
}
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
    return SignInCall(username, password)
        .then(payload => {
            dispatch({type: "LOGIN_SUCC", payload})
        })
        .catch(exception => {
            dispatch({type: "ERROR", exception})
        });
};

export const resetFlash = () => {
    return {
        type: "FLASH_RESET"
    };
};