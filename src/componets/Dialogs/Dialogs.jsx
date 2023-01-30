import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";



const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsItem = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageItem = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
       // props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
        // props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return(
      <div className={s.dialogs}>
          <div className={s.dialogItem}>
              {dialogsItem}
          </div>
          <div className={s.messages}>
              <div>{messageItem}</div>
              <div>
                  <div><textarea placeholder="Enter your message"
                                 value={newMessageBody}
                                 onChange={onNewMessageChange}></textarea></div>
                  <div><button onClick={onSendMessageClick}>Send</button></div>
              </div>

          </div>

      </div>
    );
}

export default Dialogs;