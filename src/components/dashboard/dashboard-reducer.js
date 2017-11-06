import * as types  from './dashboard-action-types';

const INITIAL_STATE = {
    grafics: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.DASHBOARD_DATA_RECEIVED:
            //Call server register client
            return { ...state, ...action.payload };             
        default:
            return state;
    }
}
