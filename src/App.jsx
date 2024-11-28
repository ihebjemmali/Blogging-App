import React from "react";

import AllPosts from "./components/AllPosts.jsx";
import Search from "./components/Search.jsx";
import CreatePost from "./components/CreatePost.jsx";
import OnePost from "./components/OnePost.jsx";
import data from "./data/exampleBlogData.js";
import PostDetails from "./components/PostDetails.jsx";

class App extends React.Component {
  constructor(props) {
    //The super keyword is used to call functions on an object's parent, including its constructor.
    // super keyword must be used before the this keyword is used in constructor .
    super(props);
    //Invoking super() calls the parent class constructor. If you want to pass some arguments in a class's constructor to its parent's constructor, you call it with super(arguments).
    this.state = {
      username: window.location.search.substring(10), //DO NOT EDIT THIS LINE
      view: "allPosts",
      data: data,
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView(view) {
    this.setState({
      view: view,
    });
  }

  renderView() {
    if (this.state.view === "allPosts") {
      return <AllPosts posts={this.state.data} />;
    } else if (this.state.view === "OnePost") {
      return <OnePost post={this.state.data} changeView={this.changeView} />;
    } else if (this.state.view === "CreatePost") {
      return <CreatePost data={this.state.data} changeView={this.changeView} />;
    }
  }

  render() {
    return (
      <div>
        <nav className=" nav">
          <div
            className={
              this.state.view !== "createPost"
                ? "nav-unselected"
                : "nav-selected"
            }
            onClick={() => {
              this.changeView("createPost");
            }}
          >
            Create Post
          </div>
          <div
            className={
              this.state.view === "allPosts" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("allPosts")}
          >
            All Posts
          </div>
          <div>
            <Search />
          </div>
        </nav>

        {this.renderView()}
      </div>
    );
  }
}

export default App;
