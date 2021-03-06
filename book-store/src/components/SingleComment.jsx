import { useState } from "react";
import { ListGroup, Button } from "react-bootstrap";
import Warning from "./Warning";

const SingleComment = (props) => {
  const [isError, setIsError] = useState(false);
  const deleteComment = async (id) => {
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
        props.fetchComments();
      } else {
        setIsError(true);
        alert("sth wrong");
      }
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };

  return (
    <>
      {isError && <Warning variant="danger" msg="error" />}
      <ListGroup>
        <ListGroup.Item>
          {/*  <span>Comment:</span> */}
          {props.comment.comment}
        </ListGroup.Item>
        <ListGroup.Item>
          {/*  <span>rate:</span> */}
          {props.comment.rate}
        </ListGroup.Item>
        <Button
          variant="danger"
          onClick={() => deleteComment(props.comment._id)}
        >
          Delete
        </Button>
      </ListGroup>
    </>
  );
};
export default SingleComment;
