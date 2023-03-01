import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsItem = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messageItem = state.messages.map(m => <Message message={m.message} key={m.id}/>);

    let addNewMessage = (value) => {

        props.sendMessage(value.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsItem}
            </div>
            <div className={s.messages}>
                <div>{messageItem}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
}
const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       name={"newMessageBody"} placeholder={"Enter your message"}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;