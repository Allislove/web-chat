import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {store} from './components/redux/Store/store';
// import chatApp from './components/redux/reducers'








// window.store = store;

const render = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

//Método que permite suscribir la vista y obtener los últimos cambios sobre el store
store.subscribe(render);
render();  // Ejecuto la funcion render.


serviceWorker.register();
