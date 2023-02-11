import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://avatanplus.com/files/resources/mid/592133aed4a1815c29b1e317.png'/>
            <div className={s.loginBlock}>
                { props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    );
}

export default Header;