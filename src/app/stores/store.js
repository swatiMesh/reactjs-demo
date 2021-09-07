import { createStore } from 'redux';
import allReducers from './../Reducers'

const store = createStore(allReducers);

// store.subscribe(() => console.log(store.getState()))
// here we are using single store for all reducers but we write multiple stores
export default store;