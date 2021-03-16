
import {
    REGISTER_FAILURE,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    USER_LOADED,
    AUTH_ERROR,
    SIGN_OUT
} from '../constants/userConstant'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
};
//eslint-disable-next-line  
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        case REGISTER_FAILURE:
        case AUTH_ERROR:
        case LOGIN_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAutenticated: false,
                loading: false
            }

        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAutenticated: true,
                loading: false,
            }

        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                isAuthenticated: true,
                loading: false
            }

        case SIGN_OUT:
            localStorage.clear();
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }

        default: return state;

    }
}

