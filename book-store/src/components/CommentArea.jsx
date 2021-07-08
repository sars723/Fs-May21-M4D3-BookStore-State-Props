import React, { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

export default class CommentArea extends Component {
  state = {
    comments: [],
  };
  componentDidMount = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.book.ASIN,
        {
          header: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2YzMGNlYWY0ODAwMTVjOTE4NjkiLCJpYXQiOjE2MjUwMjYxOTIsImV4cCI6MTYyNjIzNTc5Mn0.PsxaF5WqdL3M99ArdsNnDDq7wUtiPxw_4Nn-WRpsftI",
          },
        }
      );
      const fetchedComments = await response.json();
      this.setState({ comments: fetchedComments });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div>
        <img src={this.props.book.img} alt="" />
        <CommentList comments={this.state.comments} />
        <AddComment book={this.props.book} />
      </div>
    );
  }
}
