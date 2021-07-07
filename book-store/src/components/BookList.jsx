import SingleBook from "./SingleBook";
import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
class BookList extends Component {
  state = {
    query: "",
    books: "",
  };
  search = () => {
    const matchedBooks = this.props.books.filter((book) =>
      book.title.toLowerCase().includes(this.state.query)
    );
    this.setState({ books: matchedBooks });
    console.log(this.state.books);
  };
  render() {
    return (
      <Container>
        <Row>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={this.state.query}
              onChange={(e) => this.setState({ query: e.target.value })}
            />
            <Button variant="outline-success" onClick={this.search}>
              Search
            </Button>
          </Form>
        </Row>
        <Row className="my-5">
          <h4>Search Result</h4>
          {this.state.books &&
            this.state.books.map((book) => (
              <Col xs={12} sm={4} md={3} lg={2}>
                <SingleBook book={book} />
              </Col>
            ))}
        </Row>
        <Row>
          {this.props.books.map((book) => (
            <Col xs={12} md={4} lg={3}>
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
