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
    getState() {
        return this._state;
    },
    _callSubscriber () {
        console.log('State');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCounter: 0,
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newPostText) {
        this._state.profilePage.newPostText = newPostText;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
}

export default store;
window.store = store;