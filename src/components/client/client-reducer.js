
import * as types  from './client-action-types';

const INITIAL_STATE = {
    clientsRegistered: [
        {
            name: 'Pedro Carmona', 
            email: 'pedrocarmado@gmail.com', 
            phone: '+55 11 9999-22332', 
            doc: '42 42424 42424 2', 
        },     
        {
            name: 'Henrique Salomão', 
            email: 'henquire@gmail.com', 
            phone: '+55 11 99877-22332', 
            doc: '323 323 3222', 
        }, 
        {
            name: 'Rogerio Abreu', 
            email: 'rogerio@gmail.com', 
            phone: '+55 11 9954-2323', 
            doc: '42 3232 232 32', 
        }, 
    ],
    client: {
        name: 'Jp Nobrega', 
        email: '', 
        phone: '', 
        doc: '', 
    }     
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.CLIENT_REGISTERED:
            //Call server register client
            return { ...state, ...action.payload };       
        case types.CLIENT_FETCHED:
            //Call search client
            return { ...state, client: action.payload };
        default:
            return state;
    }
};
