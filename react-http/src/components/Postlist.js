import React, { Component } from "react";
import axios from "axios";

class Postlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: "",
    };
  }

  // Get request concept
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: "Error retriving data" });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        List of posts
        {posts.length
          ? posts.map((post) => <div key={posts.id}>{post.title}</div>)
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default Postlist;
