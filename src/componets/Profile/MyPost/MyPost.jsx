import React from "react";
import Post from "./Post/Post";
import s from "./MyPost.module.css";
import {Field, reduxForm} from "redux-form";


const MyPost = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCounter} key={p.id}/>)

    let newPostText = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.post}>
                {postElements}
            </div>
        </div>

    );
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newPostText"}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPost;