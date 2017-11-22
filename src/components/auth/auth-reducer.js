
import * as types  from './auth-action-types';

const userKey = 'key_user';
const INITIAL_STATE = {
    user: { }, //JSON.parse(localStorage.getItem(userKey)),
    validToken: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.TOKEN_VALIDATED:
            if (action.payload) 
                return { ...state, validToken:  true };
            
            RemoveUser(userKey);
            return { ...state, validToken: false, user: null };
            
        case types.USER_FETCHED:
            SetUser(userKey, JSON.stringify(action.payload));
            return { ...state, user: action.payload, validToken: true };

        case types.USER_SIGNOUT: 
            RemoveUser(userKey);
            return { ...state, ...INITIAL_STATE };
        default:
            return state;
    }
};

const SetUser = (userKey, user) => {
    localStorage.setItem(userKey, user);
};

const RemoveUser = (userKey) => {
    localStorage.removeItem(userKey);
};