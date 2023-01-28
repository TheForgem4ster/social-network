import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsItem = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messageItem = props.state.messages.map(m => <Message message={m.message}/>);
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