import { createStore } from 'redux';
import allReducers from './../Reducers'

const store = createStore(allReducers);
// store.subscribe(() => console.log(store.getState()))
export default store;