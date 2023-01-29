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
        },
        sidebar: {},
    },
    _callSubscriber () {
        console.log('State');
    },
    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        if(action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCounter: 0,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this._state);
        }
    },
}

export default store;
window.store = store;