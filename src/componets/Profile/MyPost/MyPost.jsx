import React from "react";
import Post from "./Post/Post";
import s from "./MyPost.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const maxLength10 =  maxLengthCreator(10);
const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newPostText"} placeholder={"Post message"}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const MyPost = React.memo(props => {

    console.log("her");
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
});

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPost;