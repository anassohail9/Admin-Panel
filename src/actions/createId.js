import { ID_SUCCESS, ID_FAIL } from '../constants/userConstant'
import axios from 'axios'

export const createdeviceId = (device, parameters) => async dispatch => {
    const config = { 
        headers: { 
        'Content-Type': 'application/json'
     } 
    }
    const body = JSON.stringify({ device, parameters});
    try {
        const res = await axios.post('/addDevice', body, config);
        dispatch({
            type : ID_SUCCESS,
            payload : res.data});
           
    }
     
    catch(error)
    {
        dispatch({ 
            type: ID_FAIL,
            payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
    }
}
