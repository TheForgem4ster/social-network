import React from "react";
import MyPost from "./MyPost/MyPost";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <main>
            <ProfileInfo/>
            <MyPost posts={props.profilePage.posts}
                    newPostText={props.profilePage.newPostText}
                    updateNewPostText={props.updateNewPostText}
                    addPost={props.addPost}/>
        </main>
    );
}

export default Profile;