import React from "react";
import s from './Navbar.module.css';
console.log(s);

const Navbar = () => {
    return (
        <nav className={s.nav}>
        <div className={`${s.iteam} ${s.active}`}>
          <a>Profile</a>
        </div>
        <div className={s.iteam}>
          <a>Message</a>
        </div>
        <div className={s.iteam}>
          <a>New</a>
        </div>
        <div className={s.iteam}>
          <a>Music</a>
        </div>
        <div className={s.iteam}>
          <a>Setting</a>
        </div>
      </nav>
    );
}

export default Navbar;