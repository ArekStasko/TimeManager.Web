import { persistReducer } from "redux-persist"
import {GetToken, GetUserId, SaveToken, SaveUserId, RemoveToken} from "../api/auth/AuthHelper";
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
                redirect: false
            }
        case 'REGISTER_REQ':
            return{
                ...state,
                loading: true,
                redirect: false
            }
        case 'LOADING_ON':
            return{
                ...state,
                loading: true,
                redirect: false
            }
        case 'REGISTER_SUCC':{
            SaveToken(action.payload.data.token);
            SaveUserId(action.payload.data.userId);
            return{
                ...state,
                loading: false,
                redirect: true,
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
                redirect: true,
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
                access: false,
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
        case 'GET_TASKS_RES':{
            return{
                ...state,
                loading: false,
                tasks: action.payload.data
            }
        }
        case 'ERROR':{
            console.log(action)
            return{
                ...state,
                loading: false,
                redirect: false,
                flash: {
                    type: 'ERROR',
                    message: action.exceptionMessage,
                },
            };
        }
        case "FLASH_RESET":
            return{
                ...state,
                flash: null
            }
        case "TASK_ADD_SUBMIT":{

        }
        case "TASK_ADD_SUCCESS":{

        }
        default:
            return state;
    };
}

export default persistReducer(persistConfig, rootReducer);