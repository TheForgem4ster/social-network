import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";


const Profile = (props) => {

    return (
        <main>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostContainer />
        </main>
    );
}

export default Profile;