import React, { Component } from "react";
import API, { searchGoogleBooks, saveBook, getSavedBooks } from "../utils/API";
import Container from "../components/Container";

class Search extends Component {
  state = {
    books: [],
    search: "",
    savedBookIds: []
  };
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.search === "") {
      return this.setState({ error: "Please put in a title" });
    }

    searchGoogleBooks(this.state.search)
      // console.log("searchBooks");
      // console.log(this.state.search);
      .then(res => {
        const { items } = res.data;
        this.setState({ error: null });

        const bookListCleaned = items.map(book => {
          return {
            bookId: book.id,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.thumbnail
              : ""
          };
        });
        return this.setState({ bookList: bookListCleaned, search: "" });
      })
      .then(this.retrieveSavedBooks)
      .catch(err => this.setState({ error: err }));
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input
            onChange={this.handleInputChange}
            value={this.state.search}
            type="text"
            name="Name"
          />
          <button onClick={this.searchBooks} type="button">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;

// user types the name of the book
// clicks on search button
// books from google comming to the page (title, description and poster)
// each book has to have save button
// once you clicke save it saves to the next page
