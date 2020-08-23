import {combineReducers} from 'redux';


const initialState = {
    message: {
        messages: [],
        inputMessage: ''
    },
    payload: {
        id: 'El usuario esta escribiendo un mensaje.'
    }
}


const webChat = (state = initialState, action) => {
    switch(action.type) {
        case "SEND":
            return {...state.message.inputMessage};

        case "DELETE":
            return { ...state [state.message.messages.slice()]};
        default:
            return state;
    }
}

console.log(webChat())


/*
 * otras constantes
 */

export const optionFilters = {
    DELETE_MESSAGE: 'DELETE_MESSAGE',
    SHOW_BEST: 'SHOW_BEST',
    RE_ENVIAR: 'RE_ENVIAR'
}

// Declaro una constante para reunir todos los
// reductores y asi exportarlos para su posterior uso

const allReducers = combineReducers({
    optionFilters,
    webChat,

})

export default  allReducers;