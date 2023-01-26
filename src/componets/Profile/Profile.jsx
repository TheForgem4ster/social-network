import React from "react";
import MyPost from "./MyPost/MyPost";
import s from './Profile.module.css';

const Profile = () => {
    return(
        <main className={s.content}>
          <div>
            <img src='http://pics.livejournal.com/anchiktigra/pic/001dgz1h'/>
          </div>
          <div>
            <img src='https://st2.depositphotos.com/1040719/8331/i/600/depositphotos_83315530-stock-photo-polar-bear-shaking-his-head.jpg'/>
          </div>
          <div>
            avatar + description
          </div>
          <MyPost/>
        </main>
    );
}

export default Profile;