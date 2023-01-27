import React from "react";
import Post from "./Post/Post";
import s from "./MyPost.module.css";

const MyPost = () => {
    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.post}>
                <Post message="My name is Max" likeCount='25'/>
                <Post message="Cool" likeCount='0'/>
                <Post/>
                <Post/>
            </div>

        </div>

    );
}

export default MyPost;