let renderEntireTree = () => {
    console.log('State');
}

let state = {
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
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCounter: 0,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export const updateNewPostText = (newPostText) => {
    state.profilePage.newPostText = newPostText;
    renderEntireTree(state);
}

export const subscribe = (observer) => {
    renderEntireTree = observer;
}
export default state;