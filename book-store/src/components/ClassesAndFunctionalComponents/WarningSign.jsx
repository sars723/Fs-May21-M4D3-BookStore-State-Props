import { Alert } from "react-bootstrap";

const WarningSign = (props) => {
  return <Alert variant="danger">I am an alert {props.text}</Alert>;
};

export default WarningSign;
