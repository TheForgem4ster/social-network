import React from "react";
import Post from "./Post/Post";
import s from "./MyPost.module.css";

const MyPost = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCounter}/>)

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