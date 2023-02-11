import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const initialState = {}

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userID']
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    };
}

export default persistReducer(persistConfig, rootReducer);