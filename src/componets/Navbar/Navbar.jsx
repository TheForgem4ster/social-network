import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const setActive = ({ isActive }) =>(isActive ? s.activeLink : s.item);

const Navbar = () => {
    return (
        <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
          <NavLink to="/profile" className={setActive}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs" className={setActive}>Message</NavLink>
        </div>
            <div className={s.item}>
                <NavLink to="/users" className={setActive}>User</NavLink>
            </div>
        <div className={s.item}>
          <a>New</a>
        </div>
        <div className={s.item}>
          <a>Music</a>
        </div>
        <div className={s.item}>
          <a>Setting</a>
        </div>
      </nav>
    );
}

export default Navbar;