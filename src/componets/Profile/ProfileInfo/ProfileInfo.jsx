import React from "react";
import s from "./Profile.module.css";
const ProfileInfo = () => {
    return(
        <div>
            <div>
                <img src='http://pics.livejournal.com/anchiktigra/pic/001dgz1h'/>
            </div>
            <div>
                <img src='https://st2.depositphotos.com/1040719/8331/i/600/depositphotos_83315530-stock-photo-polar-bear-shaking-his-head.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                avatar + description
            </div>
        </div>
    );
}

export default ProfileInfo;