import * as user from "./userConstant";

export const initialUserState = {
    userDetails: {
        firstName: '',
        lastName: '',
        address: ''
    }
}

export const userReducer = (state, action) => {
    switch(action.type){
        case user.UPDATE_USER_STATE: {
            return {
                ...state, 
                ...action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export const updateUserDetails = (dispatch, userDetails) => {
    dispatch({
        type: user.UPDATE_USER_STATE,
        payload: {
            userDetails
        }
    });
}