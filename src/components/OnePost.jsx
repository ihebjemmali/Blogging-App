import React from "react";

const OnePost = (props) => (
  <div className="blog-list-item">
    <div className="blog-list-item-title">{props.post.title}</div>
    <div className="blog-list-item-byline">
      <span className="blog-list-item-byline-author">{props.post.author}</span>
      {props.post.published_at}
    </div>
    <div className="blog-list-item-lede"> {props.post.content}</div>
  </div>
);

export default OnePost;
