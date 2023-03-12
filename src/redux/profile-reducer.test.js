import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: "My name is Max", likeCounter: 25},
        {id: 2, message: "Cool", likeCounter: 0},
    ],
};

test('length of post should be incremented', () => {
    // 1. test date
    let action = addPostActionCreator("social-network");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});


test('message of new post should be correct', () => {
    // 1. test date
    let action = addPostActionCreator("social-network");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[4].message).toBe("social-network");
});

test(`after deleting length shouldn't be decrement if id incorrect`, () => {
    // 1. test date
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(2);
});