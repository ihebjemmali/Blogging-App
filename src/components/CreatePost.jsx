import React, { useState } from "react";
function CreatePost(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState(window.location.search.substring(10));
  const [content, setContent] = useState("");

  const post = { title: title, author, content: content };

  return (
    <div className="blog-list-item">
      <h1 className="New-Post-Title">New Post</h1>
      <form className="New-Post-Form">
        <input
          id="title"
          type="text"
          className="search"
          placeholder="Title"
          required
          minLength="3"
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          id="content"
          className="post "
          placeholder="Content..."
          required
          minLength="20"
          defaultValue={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          className="btn btn-secondary searchButton"
          type="button"
          value="added"
          onClick={() => {
            props.addPost(post);
          }}
        />
      </form>
    </div>
  );
}

export default CreatePost;
