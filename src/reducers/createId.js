import {
    ID_FAIL,
    ID_SUCCESS
} from '../constants/userConstant'

const initialState = {
    loading: true,
    device: null,
    parameter:null
};
//eslint-disable-next-line  
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ID_SUCCESS:
            return {
                ...state,
                loading: false,
                id: payload
            }
       
        case ID_FAIL:
            return {
                ...state,
                loading: false
            }


        default: return state;

    }
}

