import React, {useEffect, useState} from "react";
import s from "./Profile.module.css";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
    return (
        <div>
            {!editMode &&
                <div>
                    <b>status:</b><span onDoubleClick={activateEditMode}>{props.status || "None status"}</span>
                </div>}
            {editMode &&
                <div>
                    <input value={status} onChange={onStatusChange} onBlur={deactivateEditMode}/>
                </div>}
        </div>
    );
}

export default ProfileStatusWithHooks;