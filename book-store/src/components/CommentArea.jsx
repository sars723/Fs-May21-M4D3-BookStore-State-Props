import { useState, useEffect } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import Warning from "./Warning";
import Loader from "./Loader";

const CommentArea = (props) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  /* state = {
    comments: [],
  }; */
  const fetchComments = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2YzMGNlYWY0ODAwMTVjOTE4NjkiLCJpYXQiOjE2MjU3NjU5MjYsImV4cCI6MTYyNjk3NTUyNn0.mG30nOku9zWiAwzzXDKObPmdvi867vPVrtbkFsstOSs",
          },
        }
      );
      if (response.ok) {
        setIsLoading(false);
        const fetchedComments = await response.json();
        console.log(fetchedComments);
        setComments(fetchedComments);
        /*  this.setState({ comments: fetchedComments }); */
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchComments();
  }, []);
  /*  componentDidMount = async () => {
    this.fetchComments();
  }; */
  useEffect(() => {
    fetchComments();
  }, [props.asin]);
  /* componentDidUpdate = (prevProps) => {
    if (prevProps.asin !== this.props.asin) {
      this.fetchComments();
    }
  }; */

  return (
    <div>
      {/*  <img
          src={this.props.book.img}
          alt=""
          style={{ width: "40px", marginTop: "10px" }}
        /> */}
      {isLoading && <Loader />}
      {isError && <Warning variant="danger" msg="error" />}
      <CommentList comments={comments} fetchComments={fetchComments} />
      <AddComment asin={props.asin} fetchComments={fetchComments} />
    </div>
  );
};
export default CommentArea;
