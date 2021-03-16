import { 
    REGISTER_FAILURE,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS
} from '../constants/userConstant'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
}

 export const  userRegisterReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return{
                ...state,
                ...payload,
                isAutenticated: true,
                loading: false,
            }
        case REGISTER_FAILURE:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                isAutenticated: false,
                loading: false
            }    
        default: return state;
        
    }
}

export const  userLoginReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return{
                ...state,
                ...payload,
                isAutenticated: true,
                loading: false,
            }
        case LOGIN_FAIL:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                isAutenticated: false,
                loading: false
            }    
        default: return state;
        
    }
}