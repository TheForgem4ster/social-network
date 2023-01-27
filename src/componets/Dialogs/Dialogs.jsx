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

    let dialogsData = [
        {id: 1, name: "Max"},
        {id: 2, name: "Masha"},
        {id: 3, name: "Dasha"},
        {id: 4, name: "Katya"},
    ];
    let messageData = [
        {id: 1, message: "Hi are you?"},
        {id: 2, message: "I fun"},
        {id: 3, message: "Good"},
    ];
    return(
      <div className={s.dialogs}>
          <div className={s.dialogItem}>
              <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
              <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
              <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
              <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
          </div>
          <div className={s.messages}>
              <Message message={messageData[0].message}/>
              <Message message="I fun"/>
              <Message message="Good"/>
          </div>
      </div>
    );
}

export default Dialogs;