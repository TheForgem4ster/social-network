import React from "react";
import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.iteam}>
      <img src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3" />
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
}

export default Post;