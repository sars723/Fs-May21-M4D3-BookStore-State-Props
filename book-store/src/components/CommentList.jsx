/* import React, {useState,useEffect} from "react"; */
import SingleComment from "./SingleComment";

const CommentList = (props) => {
  return (
    <>
      {props.comments.map((c) => (
        <SingleComment comment={c} fetchComments={props.fetchComments} />
      ))}
    </>
  );
};
export default CommentList;
