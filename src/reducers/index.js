import { persistReducer } from "redux-persist"
import {SaveToken} from "../auth/AuthHelper";
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
            SaveToken(action.payload.data.data.userId);
            return{
                ...state,
                loading: false,
                flash: {
                    type: 'SUCCESS',
                    message: 'Nice to see you again !'
                },
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
            }
        default:
            return state;
    };
}

export default persistReducer(persistConfig, rootReducer);