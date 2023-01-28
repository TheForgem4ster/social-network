import React from "react";
import Post from "./Post/Post";
import s from "./MyPost.module.css";

const MyPost = () => {
    let posts = [
        {id: 1, message: "My name is Max", likeCounter: 25},
        {id: 2, message: "Cool", likeCounter: 0},
    ]

    let postElements = posts.map(p => <Post message={p.message} likeCount={p.likeCounter}/>)

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
                {postElements}
            </div>

        </div>

    );
}

export default MyPost;