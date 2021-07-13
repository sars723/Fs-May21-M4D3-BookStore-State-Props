import React, { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

export default class CommentArea extends Component {
  state = {
    comments: [],
  };
  fetchComments = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2YzMGNlYWY0ODAwMTVjOTE4NjkiLCJpYXQiOjE2MjU3NjU5MjYsImV4cCI6MTYyNjk3NTUyNn0.mG30nOku9zWiAwzzXDKObPmdvi867vPVrtbkFsstOSs",
          },
        }
      );
      const fetchedComments = await response.json();
      console.log(fetchedComments);
      this.setState({ comments: fetchedComments });
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount = async () => {
    this.fetchComments();
  };
  componentDidUpdate = (prevProps) => {
    if (prevProps.asin !== this.props.asin) {
      this.fetchComments();
    }
  };

  render() {
    return (
      <div>
        {/*  <img
          src={this.props.book.img}
          alt=""
          style={{ width: "40px", marginTop: "10px" }}
        /> */}
        <CommentList
          comments={this.state.comments}
          fetchComments={this.fetchComments}
        />
        <AddComment asin={this.props.asin} fetchComments={this.fetchComments} />
      </div>
    );
  }
}
