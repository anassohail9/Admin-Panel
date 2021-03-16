import { 
    REGISTER_FAILURE, 
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    SIGN_OUT
 } from '../constants/userConstant'
 import axios from 'axios';
 import setAuthToken from '../utils/setAuthtoken'

 export const loadUser = () => async dispatch => {
     if(localStorage.token) {
         setAuthToken(localStorage.token);
     }
     try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
     }
     catch (error){
        dispatch({
            type: AUTH_ERROR,
            payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })

     }
 }
export const register = ( name, email, mobile, password) => async dispatch => {
    const config = { 
        headers: { 
        'Content-Type': 'application/json'
     } 
    }
    const body = JSON.stringify({ name, email, mobile, password });
    try {
        const res = await axios.post('https://jsonplaceholder.typicode.com/users', body, config);
        dispatch({
            type : REGISTER_SUCCESS,
            payload : res.data});
            dispatch(loadUser())
    }
     
    catch(error)
    {
        dispatch({ 
            type: REGISTER_FAILURE,
            payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
    }
};

export const login = (email, password) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type' : 'application/json'
      }
    }
    const body = JSON.stringify({ email, password});
    try {
      const res = await axios.post('/signin', body, config );
      dispatch({
         type: LOGIN_SUCCESS,
         payload: res.data });
         dispatch(loadUser());
    } 
    
    catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,

      });
     
 if(error.response.data.errors){
        dispatch(
          alert(error)
        )
      }
      dispatch({
        type:LOGIN_FAIL
      })
    }
  };

 export const signout = () => async dispatch => {
  dispatch({ type: SIGN_OUT });
 }
 