import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Warning from "./Warning";

const AddComment = (props) => {
  const [comments, setComments] = useState({
    comment: "",
    rate: 1,
    elementId: props.asin,
  });
  const [isError, setIsError] = useState(false);
  /* state = {
    comments: {
      comment: "",
      rate: 1,
      elementId: this.props.asin,
    },
  }; */
  const handleChange = (key, value) => {
    setComments({
      ...comments,
      [key]: value,
    });
    /*  this.setState({
      comments: {
        ...this.state.comments,
        [key]: value,
      },
    }); */
    console.log(comments);
  };
  useEffect(() => {
    setComments({
      ...comments,
      elementId: props.asin,
    });
  }, [props.asin]);
  /*  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.setState({
        comment: {
          ...this.state.comment,
          elementId: this.props.asin,
        },
      });
    }
  } */
  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(comments),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2YzMGNlYWY0ODAwMTVjOTE4NjkiLCJpYXQiOjE2MjU3NjU5MjYsImV4cCI6MTYyNjk3NTUyNn0.mG30nOku9zWiAwzzXDKObPmdvi867vPVrtbkFsstOSs",
          },
        }
      );
      if (response.ok) {
        alert("comments saved");
        props.fetchComments();
        setComments({
          comment: "",
          rate: 1,
          elementId: props.asin,
        });
      } else {
        setIsError(true);
        alert("sth wrong ");
      }
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };

  return (
    <>
      {isError && <Warning variant="danger" msg="error" />}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>rate</Form.Label>
          <Form.Control
            as="select"
            value={comments.rate}
            onChange={(e) => {
              handleChange("rate", e.target.value);
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Give your comment here please</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={comments.comment}
            onChange={(e) => {
              handleChange("comment", e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Movie Id</Form.Label>
          <Form.Control type="text" value={props.asin} disabled />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
export default AddComment;
