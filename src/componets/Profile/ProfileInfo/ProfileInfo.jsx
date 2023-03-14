import React from "react";
import s from "./Profile.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if(!profile){
        return <Preloader/>
    }
    return(
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large}/>
                avatar + description
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;