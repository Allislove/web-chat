import {createStore} from 'redux';
import allReducers from "../Reducers/reducers";  // Ya como tenemos exportado los reducers, procedo a
// importarlos


export const store = createStore(allReducers);


// Obtengo todo el estado de la aplicacion
let chatApp =  store.getState();
console.log(chatApp)
// console.log(store.getState());


// nos suscribimos al store, esto nos devuelve
// una función que nos sirve para desuscribirnos
const unsubscribe = store.subscribe(() => {
    // vemos el nuevo store
    console.log(store.getState());
    // nos desuscribimos
    unsubscribe();
});


// const rootReducer = combineReducers({ allReducers: allReducers });

// export default createStore(rootReducer);
// store.dispatch(send('Aprender sobre acciones'))
