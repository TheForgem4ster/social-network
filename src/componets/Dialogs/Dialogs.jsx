import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const dialogActive = s.dialog + ' ' + s.active;
const DialogItem = (props) => {
    return (
        <div className={props.id === 1 ? dialogActive : s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
}
// (props.id === 1) => props.id:
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return(
      <div className={s.dialogs}>
          <div className={s.dialogItem}>
              <DialogItem name="Max" id="1"/>
              <DialogItem name="Masha" id="2"/>
              <DialogItem name="Dasha" id="3"/>
              <DialogItem name="Katya" id="4"/>
          </div>
          <div className={s.messages}>
              <Message message="Hi are you?"/>
              <Message message="I fun"/>
              <Message message="Good"/>
          </div>
      </div>
    );
}

export default Dialogs;