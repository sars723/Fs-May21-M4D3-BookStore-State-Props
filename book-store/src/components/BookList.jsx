import SingleBook from "./SingleBook";
import { useState } from "react";
import CommentArea from "./CommentArea";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
const BookList = (props) => {
  const [query, setQuery] = useState("");
  const [selectedBookAsin, setSelectedBookAsin] = useState(null);
  const [books, setBooks] = useState(null);

  /* state = {
    query: "",
    selectedBook: null,
  }; */
  const search = () => {
    const matchedBooks = props.books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
    setBooks(matchedBooks);
    console.log(books);
  };

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
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button variant="outline-success" onClick={search}>
              Search
            </Button>
          </Form>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col className="col-12 col-sm-6 col-md-9">
          <Row>
            {books
              ? books.map((book) => (
                  <Col xs={12} sm={4} md={3} lg={2}>
                    <SingleBook book={book} />
                  </Col>
                ))
              : props.books.map((book) => (
                  <Col xs={12} md={4} lg={3}>
                    <SingleBook
                      book={book}
                      getSelectedBookAsin={(asin) => setSelectedBookAsin(asin)}
                    />
                  </Col>
                ))}
          </Row>
        </Col>
        <Col className="col-12 col-sm-6 col-md-3">
          {console.log(selectedBookAsin)}
          {selectedBookAsin && <CommentArea asin={selectedBookAsin} />}
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
