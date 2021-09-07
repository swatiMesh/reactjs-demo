import counter from './numberReducer';
import loggedReducer from './loggedReducer'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counter,
    loggedReducer: loggedReducer
})

export default allReducers;