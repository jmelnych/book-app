import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBook extends Component{
  // state = {
  //   query: ''
  // }
  // updateQuery = (query) => {
  //   this.setState({query: query.trim()})
  // }

    render(){
      console.log(this.props.requestedBooks);
        return (
                <div className="search-books">
                    <div className="search-books-bar">
                      <Link to='/' className="close-search">Close</Link>
                      <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                              //value={this.state.query}
                              //onChange={(event) => this.updateQuery(event.target.value)}
                              onChange={(e) => this.props.onSearchBook(e.target.value)}
                              />
                      </div>
                    </div>
                    <div className="search-books-results">
                      <ol className="books-grid">
                        {this.props.requestedBooks.map((book)=>(
                            <li key={book.id}>
                              <div className="book">
                                <div className="book-top">
                                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                  <div className="book-shelf-changer">
                                    <select value={book.shelf} onChange={(e)=> this.props.onChangeShelf(book, e.target.value)}>
                                      <option value="none" disabled>Move to...</option>
                                      <option value="currentlyReading">Currently Reading</option>
                                      <option value="wantToRead">Want to Read</option>
                                      <option value="read">Read</option>
                                      <option value="none">None</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors}</div>
                              </div>
                            </li>
                            )
                          )}
                        </ol>
                    </div>
                </div>
            )
    }
}

export default SearchBook;