import {SignUpCall, SignInCall} from "../api/apiCalls";
import {SaveToken} from "./AuthHelper";

export const SignIn = ({data}) => {
    try{
        const res = SignInCall(data);
        SaveToken(res);
        return true;
    }
    catch (exception){
        return false;
    }
}

export const SignUp = ({data}) => {

    try{
        const res = SignUpCall(data);
        SaveToken(res)
        return true;
    }
    catch (exception){
        return false;
    }
}