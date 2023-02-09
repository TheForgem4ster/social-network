import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";


const Profile = (props) => {
    return (
        <main>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer />
        </main>
    );
}

export default Profile;