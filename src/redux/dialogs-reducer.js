const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
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
    newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
        {
            let stateCopy = {...state};
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        case SEND_MESSAGE:{
            let stateCopy = {...state};
            let body = stateCopy.newMessageBody;
            stateCopy.newMessageBody = '';
            stateCopy.messages.push({id: 4, message: body});
            return stateCopy;
        }
        default:
            return state;
    }
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;