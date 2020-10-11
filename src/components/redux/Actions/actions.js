import {store} from "../Store/store";


export const send = () => {
    return {
        type: "SEND",
        payload: {
            text: ''
        }
    }
}




export const deleteMessage = (id) => {
    return {
        type: 'DELETE',
        payload: {
            id
        }
    }
}


export const capturingMessages = (id) => {
    return {
        type: "SET_INPUT_VALUE",
        payload: {
            id
        }
    }
}

// let dispatches = store.dispatch(send(), deleteMessage(), capturingMessages());




store.dispatch(send());
store.dispatch(deleteMessage());
store.dispatch(capturingMessages())