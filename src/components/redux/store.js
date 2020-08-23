import {createStore} from 'redux';
import allReducers from "./reducers";  // Ya como tenemos exportado los reducers, procedo a
// importarlos
// import {send} from './actions';

export const store = createStore(allReducers);




console.log(store.getState())

// const rootReducer = combineReducers({ allReducers: allReducers });

// export default createStore(rootReducer);
// store.dispatch(send('Aprender sobre acciones'))
