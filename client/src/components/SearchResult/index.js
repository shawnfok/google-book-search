import React from "react";
import { Container, Row, Col } from "../Grid"
import "./style.css";

const SearchResult = props => {
  return (
    <Container>
      <h3 className="SearchResult">Search Results</h3>
      {props.books.map(book => {
        return (
          <div className="card mb-5">
            <div className="card-body">
              <Row className="SearchResult row" id={book.title + "Card"} key={book._id}>
                <Col size="2">
                  <img src={book.image} alt={book.title} />
                </Col>
                <Col size="10" className="pl-2">
                  <h3 className="bookTitle">{book.title}</h3>
                  <h4 className="bookAuthor">{book.authors}</h4>
                  <p className="bookDescription pr-3">{book.description}</p>
                </Col>
              </Row>
              <Row>             
                <a href={book.link} target="_blank" rel="noopener noreferrer">
                  <button className="view btn mt-4 ml-2 mr-2">
                    Read Now</button>                 
                </a>
                <button className="save btn mt-4" id={book.id} onClick={(event) => props.handleSavedButton(event)}>
                  Save For Later</button>
              </Row>
            </div>
          </div>

        );
      })}
    </Container>
  )
}
export default SearchResult;