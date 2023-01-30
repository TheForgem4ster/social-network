import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";


const Profile = (props) => {
    debugger;
    return (
        <main>
            <ProfileInfo/>
            <MyPostContainer store={props.store}/>
        </main>
    );
}

export default Profile;