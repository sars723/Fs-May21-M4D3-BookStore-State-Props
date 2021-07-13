import React, { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";

export default class SingleComment extends Component {
  deleteComment = async (id) => {
    try {
      const response = await fetch(
        " https://striveschool-api.herokuapp.com/api/comments/" + id,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2YzMGNlYWY0ODAwMTVjOTE4NjkiLCJpYXQiOjE2MjU3NjU5MjYsImV4cCI6MTYyNjk3NTUyNn0.mG30nOku9zWiAwzzXDKObPmdvi867vPVrtbkFsstOSs",
          },
        }
      );
      if (response.ok) {
        alert("comment deleted successfully");
        this.props.fetchComments();
      } else {
        alert("sth wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <ListGroup>
        <ListGroup.Item>
          {/*  <span>Comment:</span> */}
          {this.props.comment.comment}
        </ListGroup.Item>
        <ListGroup.Item>
          {/*  <span>rate:</span> */}
          {this.props.comment.rate}
        </ListGroup.Item>
        <Button
          variant="danger"
          onClick={() => this.deleteComment(this.props.comment._id)}
        >
          Delete
        </Button>
      </ListGroup>
    );
  }
}
