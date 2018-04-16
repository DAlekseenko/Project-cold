import {REQUEST_CALL, START, SUCCESS, FAIL} from '../../CONSTANT'

export const requestCallStart = () => ({
    type: REQUEST_CALL + START
});

export const requestCallSuccess = response => ({
    type: REQUEST_CALL + SUCCESS,
    payload: response
});

export const requestCallFail = () => ({
    type: REQUEST_CALL + FAIL
});
