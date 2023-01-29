import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "My name is Max", likeCounter: 25},
                {id: 2, message: "Cool", likeCounter: 0},
            ],
            newPostText: 'social-network',
        },
        dialogsPage: {
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
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('State');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
}




export default store;
window.store = store;