import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

const SingleBook = (props) => {
  const [selected, setSelected] = useState(false);
  /*  state = {
    selected: false,
  }; */

  return (
    <Container style={{ paddingBottom: "1rem" }}>
      <Row>
        <Card
          className="cardstyle"
          // onClick={() => this.setState({ selected: !this.state.selected })}

          style={{ border: selected ? "3px solid red" : "none" }}
        >
          <Card.Link href="#">
            <Card.Img
              variant="top"
              src={props.book.img}
              onClick={() => {
                props.getSelectedBookAsin(props.book.asin);
                setSelected(!selected);
              }}
            />
          </Card.Link>

          <Card.Body>
            <Card.Title>
              <small>{props.book.title}</small>
            </Card.Title>
          </Card.Body>
        </Card>
      </Row>
      <Row>{/* {selected && <CommentArea asin={props.book.asin} />} */}</Row>
    </Container>
  );
};

export default SingleBook;
