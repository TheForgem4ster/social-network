import React from "react";
import MyPost from "./MyPost/MyPost";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <main>
            <ProfileInfo/>
            <MyPost posts={props.state.posts} addPost={props.addPost}/>
        </main>
    );
}

export default Profile;