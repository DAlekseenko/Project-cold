import axios from 'axios';
import {requestCallStart, requestCallFail, requestCallSuccess} from "../AC/feedBackAC";

export const requestCall = fields => dispatch => {
    dispatch(requestCallStart());
    return axios.post('/request-call', fields)
        .then((response) => {
            dispatch(requestCallSuccess(response.data));
        })
        .catch(function (error) {
            dispatch(requestCallFail(error));
        });
};