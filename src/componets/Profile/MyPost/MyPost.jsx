import React from "react";
import Post from "./Post/Post";
import s from "./MyPost.module.css";

const MyPost = () => {
  return (
    <div>
      My post
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.post}>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
     
    </div>

  );
}

export default MyPost;