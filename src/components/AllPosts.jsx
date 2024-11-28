import React from "react";
import PostDetails from "./PostDetails.jsx";

const AllPosts = (props) => {
  return (
    <div className="all-post">
      {props.posts.map((post) => (
        <PostDetails post={post} />
      ))}
    </div>
  );
};

export default AllPosts;
