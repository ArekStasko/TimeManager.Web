import { persistReducer } from "redux-persist"
import {GetToken, GetUserId, SaveToken, SaveUserId, RemoveToken} from "../auth/AuthHelper";
import storage from "redux-persist/lib/storage"

const initialState = {}

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userID']
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_REQ':
            return{
                ...state,
                loading: true,
            }
        case 'REGISTER_REQ':
            return{
                ...state,
                loading: true,
            }
        case 'REGISTER_SUCC':{
            SaveToken(action.payload.data.token);
            SaveUserId(action.payload.data.userId);
            return{
                ...state,
                loading: false,
                flash: {
                    type: 'SUCCESS',
                    message: 'Welcome to my application !'
                },
            }
        }
        case 'LOGIN_SUCC':{
            SaveToken(action.payload.data.token);
            SaveUserId(action.payload.data.userId);
            return{
                ...state,
                loading: false,
                flash: {
                    type: 'SUCCESS',
                    message: 'Nice to see you again !'
                },
            }
        }
        case 'SIGN_OUT':{
            RemoveToken();
            return{
                ...state,
                loading: false,
                flash: {
                    type: 'SUCCESS',
                    message: 'Hope to see you again !'
                },
            }
        }
        case 'RESTRICTED_AREA_REQ':{
            return{
                ...state,
                loading: true,
            }
        }
        case 'RESCTRICTED_AREA_RES':{
            if(action.payload.data){
                return{
                    ...state,
                    loading: false,
                    access: true
                }
            }

            return{
                ...state,
                loading: false,
                access: false
            }

        }
        case 'ERROR':
            return{
                ...state,
                loading: false,
                flash: {
                    type: 'ERROR',
                    message: null,
                },
            };
        case "FLASH_RESET":
            return{
                ...state,
                flash: null
            }
        default:
            return state;
    };
}

export default persistReducer(persistConfig, rootReducer);