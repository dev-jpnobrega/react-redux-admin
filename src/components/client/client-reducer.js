
import * as types  from './client-action-types'

const INITIAL_STATE = {
    client: {
        name: 'Jp Nobrega', 
        email: '', 
        phone: '', 
        doc: '', 
    }     
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.CLIENT_REGISTERED:
            //Call server register client
            return { ...state, ...action.payload }            
        case types.CLIENT_FETCHED:
            //Call search client
            return { ...state, client: action.payload }
        default:
            return state
    }
}
