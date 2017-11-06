import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import * as types  from './dashboard-action-types';


export function getGraficsData(param) {
    return dispatch => {
        axios.post('url', param)
            .then(resp => {
                dispatch([
                    { type: types.DASHBOARD_DATA_RECEIVED, payload: resp.data }
                ]);
            })
            .catch(e => {
                e.response.data.errors.forEach(erro => toastr.error('ERROR', erro));
            });
        };
    }