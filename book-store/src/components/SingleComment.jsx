import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

export default class SingleComment extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroup.Item>
          <span>Comment:</span>
          {this.props.comment.comment}
          <span>rate:</span>
          {this.props.comment.rate}
        </ListGroup.Item>
      </ListGroup>
    );
  }
}
