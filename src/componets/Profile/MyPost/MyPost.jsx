import React from "react";
import Post from "./Post/Post";
import s from "./MyPost.module.css";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPost = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCounter}/>)

    let newPostText = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostText.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }
    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostText} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.post}>
                {postElements}
            </div>
        </div>

    );
}

export default MyPost;