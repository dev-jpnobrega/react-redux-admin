import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import * as types  from './client-action-types';


export function register(client) {
    return dispatch => {
        axios.post('url', client)
            .then(resp => {
                dispatch([
                    { type: types.CLIENT_REGISTERED, payload: resp.data }
                ]);
            })
            .catch(e => {
                e.response.data.errors.forEach(erro => toastr.error('ERROR', erro));
            });
        };
    }
    