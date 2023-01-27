import React from "react";
import MyPost from "./MyPost/MyPost";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <main>
            <ProfileInfo/>
            <MyPost/>
        </main>
    );
}

export default Profile;