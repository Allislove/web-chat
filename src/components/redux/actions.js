


export const send = (id) => {
    return {
        type: "SEND",
        payload: "Mensaje enviado"
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