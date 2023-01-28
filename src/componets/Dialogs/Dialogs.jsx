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

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: "Max"},
        {id: 2, name: "Masha"},
        {id: 3, name: "Dasha"},
        {id: 4, name: "Katya"},
    ];
    let dialogsItem = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messages = [
        {id: 1, message: "Hi are you?"},
        {id: 2, message: "I fun"},
        {id: 3, message: "Good"},
    ];

    let messageItem = messages.map(m => <Message message={m.message}/>);
    return(
      <div className={s.dialogs}>
          <div className={s.dialogItem}>
              {dialogsItem}
          </div>
          <div className={s.messages}>
              {messageItem}
          </div>
      </div>
    );
}

export default Dialogs;