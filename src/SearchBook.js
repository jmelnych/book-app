import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class SearchBook extends Component{
  state = {
    booksResult: []
  }

   searchBook = (query) => {
    if (query){
       BooksAPI.search(query, 10)
        .then((booksResult) => {
          const myLib = new Map();
          this.props.books.map(shelvedBook => myLib.set(shelvedBook.id, shelvedBook.shelf));
          // store my lib as a key-value pairs: {"nggnmAEACAAJ" => "currentlyReading"}
          booksResult.map(function(book){
            for (let [id, shelf] of myLib){
              if (book.id === id) {
                console.log(book.id + " " + shelf);
                book.shelf = shelf;
              }
            }
          }

        )
        this.setState({booksResult})
        })
    }
  }


    render(){
        const labelColorShelved = {
            'backgroundColor': '#60ac5d'
        }
        const labelColorNew = {
            'backgroundColor': 'orange'
        }
        return (
                <div className="search-books">
                    <div className="search-books-bar">
                      <Link to='/' className="close-search">Close</Link>
                      <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                              onChange= {(e) => this.searchBook(e.target.value)}
                              />
                      </div>
                    </div>
                    <div className="search-books-results">
                      <ol className="books-grid">
                        {this.state.booksResult.map((book)=>(
                            <li key={book.id}>
                              <div className="book">
                                <div className="book-top">
                                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                  <div className="book-shelf-changer" style ={(book.shelf) ? labelColorShelved : labelColorNew}>
                                    <select value={book.shelf || "none"} onChange={(e)=> this.props.onChangeShelf(book, e.target.value)}>
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