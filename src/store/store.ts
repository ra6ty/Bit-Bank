import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {authReducer} from "./reducers/auth/auth";

export interface AuthTypes {
    auth: {
        logout: () => void,
        token: string
    }
}

export const store = createStore(authReducer, composeWithDevTools())

