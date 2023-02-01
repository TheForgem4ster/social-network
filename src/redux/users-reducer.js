const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [ ],
    newPostText: 'social-network',
    //     {id: 1, photoUrl:'https://www.film.ru/sites/default/files/images/mad-max-fury-road-image-tom-hardy-5.jpg', followed: true, fullName: "Max", status: 'I am boss', location: {city: 'Kharkov', country: 'Ukraine'}},
    //     {id: 2, photoUrl:'https://antikor.com.ua/foto/articles_foto/2022/08/08/565704.jpg', followed: true, fullName: "Maria", status: 'I am assistant', location: {city: 'Los Angeles', country: 'USA'}},
    //     {id: 3, photoUrl:'https://images.kinorium.com/persona/180/898464.jpg?1643293218', followed: false, fullName: "Veronica", status: 'I am design', location: {city: 'Warsaw', country: 'Poland'}},
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: [ ...state.users, ...action.users ]}
        }
        default:
            return state;
    }
}


export const followAC = (userId) => ({type: FOLLOW, userId })
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({type: SET_USERS, users })

export default usersReducer;