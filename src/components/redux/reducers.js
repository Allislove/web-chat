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

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// Declaro una constante para reunir todos los
// reductores y asi exportarlos para su posterior uso

const allReducers = combineReducers({
    VisibilityFilters,
    webChat,

})

export default  allReducers;