import React from "react";

const PostDetails = (props) => (
  <div className="blog-list-item">
    <div className="blog-list-item-title"> {props.post.title}</div>
    <div className="blog-list-item-byline">
      <span className="blog-list-item-byline-author">
        {" "}
        {props.post.author}{" "}
      </span>
      {props.post.published_at}
    </div>
    <div className="blog-list-item-lede">
      <img src={props.post.imageUrl} alt="no content" />
    </div>
  </div>
);

export default PostDetails;
