
import counter from './counter';
import auth from './auth';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({ 
    counter, 
    auth 
});

    export default rootReducer;