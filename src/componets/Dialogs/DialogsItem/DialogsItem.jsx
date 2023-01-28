import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const dialogActive = s.dialog + ' ' + s.active;
const DialogItem = (props) => {
    return (
        <div className={props.id === 1 ? dialogActive : s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;