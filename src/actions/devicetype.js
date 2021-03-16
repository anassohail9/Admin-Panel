import {
     ADD_DEVICE_SUCCESS, 
     ADD_DEVICE_FAIL
} from '../constants/userConstant'

import axios from 'axios'

export const addDevice = (device_name, device_desc) => async dispatch => {
    const config = { 
        headers: { 
        'Content-Type': 'application/json'
     } 
    }
    const body = JSON.stringify({device_name, device_desc});
    try{
        const res=await axios.post('/addDeviceTypes', body, config);
        dispatch({
            type : ADD_DEVICE_SUCCESS,
            payload: res.data
        })
    }
    catch(error) {
        dispatch({ 
            type: ADD_DEVICE_FAIL,
            payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
    }
}