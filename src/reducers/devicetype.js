
import {
    ADD_DEVICE_SUCCESS, 
    ADD_DEVICE_FAIL
} from '../constants/userConstant'

const initialState = {
    error:null,
    loading: true,
    device:null
};
//eslint-disable-next-line  
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_DEVICE_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false,
                device: payload
            }
        case ADD_DEVICE_FAIL:
            return {
                ...state,
               device:null,
                loading: false,
                error: action.payload.error
            }

        default: return state;

    }
}

