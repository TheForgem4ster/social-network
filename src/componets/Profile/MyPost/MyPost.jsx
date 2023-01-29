import React from "react";
import Post from "./Post/Post";
import s from "./MyPost.module.css";
import {updateNewPostText} from "../../../redux/state";

const MyPost = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCounter}/>)

    let newPostText = React.createRef();

    let addPost = () =>{
        props.dispatch({type: 'ADD-POST'});
    }

    let onPostChange = () => {
        let text = newPostText.current.value;
        let newVar = {type: 'UPDATE-NEW-POST-TEXT', newPostText: text};
        props.dispatch(newVar);
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