import React from "react";
import s from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://www.film.ru/sites/default/files/images/mad-max-fury-road-image-tom-hardy-5.jpg',
                followed: true,
                fullName: "Max",
                status: 'I am boss',
                location: {city: 'Kharkov', country: 'Ukraine'}
            },
            {
                id: 2,
                photoUrl: 'https://antikor.com.ua/foto/articles_foto/2022/08/08/565704.jpg',
                followed: true,
                fullName: "Maria",
                status: 'I am assistant',
                location: {city: 'Los Angeles', country: 'USA'}
            },
            {
                id: 3,
                photoUrl: 'https://images.kinorium.com/persona/180/898464.jpg?1643293218',
                followed: false,
                fullName: "Veronica",
                status: 'I am design',
                location: {city: 'Warsaw', country: 'Poland'}
            },
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={s.userPhoto}/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                    : <button onClick={() => props.follow(u.id)}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.state}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
}

export default Users;