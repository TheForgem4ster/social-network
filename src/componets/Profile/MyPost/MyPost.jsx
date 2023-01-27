import React from "react";
import Post from "./Post/Post";
import s from "./MyPost.module.css";

const MyPost = () => {
    let postData = [
        {id: 1, message: "My name is Max", likeCounter: 25},
        {id: 2, message: "Cool", likeCounter: 0},
    ]

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
                <Post message={postData[0].message} likeCount={postData[0].likeCounter}/>
                <Post message={postData[1].message} likeCount={postData[1].likeCounter}/>
                <Post/>
                <Post/>
            </div>

        </div>

    );
}

export default MyPost;