const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: "Max"},
        {id: 2, name: "Masha"},
        {id: 3, name: "Dasha"},
        {id: 4, name: "Katya"},
    ],
    messages: [
        {id: 1, message: "Hi are you?"},
        {id: 2, message: "I fun"},
        {id: 3, message: "Good"},
    ],
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return  {
                ...state,
                messages: [...state.messages, {id: 4, message: body}]
            };
        }
        default:
            return state;
    }
}


export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;