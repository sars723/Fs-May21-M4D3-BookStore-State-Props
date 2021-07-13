import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Container style={{ paddingBottom: "1rem" }}>
        <Row>
          <Card
            className="cardstyle"
            // onClick={() => this.setState({ selected: !this.state.selected })}

            // style={{ border: this.state.selected ? "3px solid red" : "none" }}
          >
            <Card.Link href="#">
              <Card.Img
                variant="top"
                src={this.props.book.img}
                onClick={() => {
                  this.props.getSelectedBook(this.props.book.asin);
                }}
              />
            </Card.Link>

            <Card.Body>
              <Card.Title>
                <small>{this.props.book.title}</small>
              </Card.Title>
            </Card.Body>
          </Card>
        </Row>
        <Row>
          {/* {this.state.selected && <CommentArea book={this.props.book} />} */}
        </Row>
      </Container>
    );
  }
}

export default SingleBook;
