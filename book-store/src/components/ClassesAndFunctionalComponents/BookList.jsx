import SingleBook from "./SingleBook";
import React, { Component } from "react";
import CommentArea from "./CommentArea";
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
    selectedBook: null,
  };
  search = () => {
    const matchedBooks = this.props.books.filter((book) =>
      book.title.toLowerCase().includes(this.state.query.toLowerCase())
    );
    this.setState({ books: matchedBooks });
    console.log(this.state.books);
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs={12}>
            {" "}
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
          </Col>
        </Row>

        <Row className="mt-5">
          <Col className="col-12 col-sm-6 col-md-9">
            <Row>
              {this.state.books
                ? this.state.books.map((book) => (
                    <Col xs={12} sm={4} md={3} lg={2}>
                      <SingleBook book={book} />
                    </Col>
                  ))
                : this.props.books.map((book) => (
                    <Col xs={12} md={4} lg={3}>
                      <SingleBook
                        book={book}
                        getSelectedBook={(asin) =>
                          this.setState({ selectedBook: asin })
                        }
                      />
                    </Col>
                  ))}
            </Row>
          </Col>
          <Col className="col-12 col-sm-6 col-md-3">
            {console.log(this.state.selectedBook)}
            {this.state.selectedBook && (
              <CommentArea asin={this.state.selectedBook} />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
