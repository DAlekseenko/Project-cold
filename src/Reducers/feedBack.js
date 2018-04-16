import {REQUEST_CALL, START, SUCCESS, FAIL} from '../CONSTANT'
import {Record} from 'immutable'

const ReducerState = Record({
    successMessage: null,
    errors: null,
    loading: false
});

export default (state = new ReducerState(), action = {}) => {
    switch (action.type) {
        case REQUEST_CALL + START:
            return state
                .set('loading', true)
                .set('successMessage', null)
                .set('errors', null);
        case REQUEST_CALL + SUCCESS:
            console.log(action.payload);
            return state
                .set('successMessage', action.payload)
                .set('loading', false);
        case REQUEST_CALL + FAIL:
            return state
                .set('loading', false)
                .set('errors', action.payload);
        default:
            return state;
    }
}