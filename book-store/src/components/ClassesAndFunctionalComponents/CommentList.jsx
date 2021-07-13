import React, { Component } from "react";
import SingleComment from "./SingleComment";

export default class CommentList extends Component {
  render() {
    return (
      <>
        {this.props.comments.map((c) => (
          <SingleComment comment={c} fetchComments={this.props.fetchComments} />
        ))}
      </>
    );
  }
}
