const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

const autoReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            debugger
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});

export default autoReducer;