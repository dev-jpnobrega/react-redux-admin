import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import * as types  from './auth-action-types';

const url_oapi = 'http://localhost:3003/oapi';

function submit(values, url) {
    return dispatch => {
        axios.post(url, values)
            .then(resp => {
                dispatch([
                    { type: types.USER_FETCHED, payload: resp.data }
                ]);
            })
            .catch(e => {
                e.response.data.errors.forEach(erro => toastr.error('ERROR', erro));
            });
    };
}

export function login(values) {
    toastr.info('Info Messager', 'Bem-vindo João Paulo Nobrega' + values);
    return dispatch => 
        dispatch([
          { type: types.USER_FETCHED, payload: { id: 'asdf213131d1e12edd1', name: 'João Paulo Nobrega', email: 'joaopaulonobrega@hotmail.com', photo: 'http://www.material-ui.com/images/uxceo-128.jpg' } }
        ]);
}

export function signout() {
    toastr.info('Até breve', 'Volte sempre João Paulo Nobrega');

    return dispatch => 
            dispatch([{ type: types.USER_SIGNOUT, payload: { } }]);   
}



export function signup(values) {
    return submit(values, url_oapi + '/signup');
}

export function logout() {
    return { type: types.TOKEN_VALIDATED, payload: false };
}

export function validateToken(token) {
    return dispatch => {
        if (token) {
            axios.post(url_oapi + '/validateToken', { token })
                .then(resp => {
                    dispatch({ type:  types.TOKEN_VALIDATED, payload: resp.data.valid });
                })
                .catch(e => 
                    dispatch({ 
                        type:  types.TOKEN_VALIDATED, 
                        payload: false,
                        errors: e
                    })
                );
        } else {
            dispatch({ type:  types.TOKEN_VALIDATED, payload: false });
        }
    };
}


