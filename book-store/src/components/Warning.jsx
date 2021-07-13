import { Alert } from "react-bootstrap";

const Warning = (props) => {
  return <Alert variant={props.variant}>I am an alert {props.msg}</Alert>;
};

export default Warning;
