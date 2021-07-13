import React from "react";
import { Badge } from "react-bootstrap";

const MyBadge = (props) => {
  return (
    <div>
      <Badge variant={props.color}>{props.text}</Badge>
    </div>
  );
};

export default MyBadge;
