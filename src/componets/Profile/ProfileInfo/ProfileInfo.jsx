import React from "react";
import s from "./Profile.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return(
        <div>
            {/*<div>*/}
            {/*    <img src='http://pics.livejournal.com/anchiktigra/pic/001dgz1h'/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <img src='https://st2.depositphotos.com/1040719/8331/i/600/depositphotos_83315530-stock-photo-polar-bear-shaking-his-head.jpg'/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                avatar + description
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;