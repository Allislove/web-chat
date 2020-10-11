import {combineReducers} from 'redux';
import messageArea from "../../MessageArea";
//Reducer, recupera y organiza las acciones,

const initialState = {
    message: {
        messages: [],
        inputMessage: ''

    },

}


const webChat = (state = initialState, action) => {
    switch(action.type) {
        case "SEND":
            return {
                ...state, messages: action.payload
            };
        case "DELETE":
            return {
                ...state, messages: action.payload.id
            }
        case "CAPTURE":
            return state;
        default:
            return state;
    }
}

// console.log(webChat("SEND"))


/*
 * otras constantes
 */

const optionFilters = {
    DELETE_MESSAGE: 'DELETE_MESSAGE',
    AS_FAVORITE: 'AS_FAVORITE',
    RE_ENVIAR: 'RE_ENVIAR'
}

// Declaro una constante para reunir todos los
// reductores y asi exportarlos para su posterior uso

const allReducers = combineReducers({
    optionFilters,
    webChat

})

export default  allReducers;