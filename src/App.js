import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookShelves from './BookShelves';
import SearchBook from './SearchBook';
import { Route } from 'react-router-dom';
import Book from './Book';

class App extends Component {
  state = {
    books: [],
    bookClicked: []
  }

 componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then((booksUpdate) => {
        book.shelf = shelf; //update book we change to a new shelf
       this.setState((state) => ({
        books: state.books.filter((b) => b.id !== book.id).concat([book])
      }))
    })
  }

  showBookDetails = (bookClicked) => {
    this.setState({bookClicked});
  }


  render() {
    console.log(this.state.bookClicked);
    return (
      <div className="App">
        <Route exact path='/' render={()=>(
            <BookShelves books={this.state.books}
                         onChangeShelf={this.updateShelf}
                         aboutBook = {this.showBookDetails}
            />
            )}
        />
        <Route path='/search' render={()=>(
            <SearchBook onChangeShelf={this.updateShelf}
                        books={this.state.books}
                        aboutBook = {this.showBookDetails}
            />
            )}
        />
        <Route path='/book' render={()=>(
          <Book currentBook={this.state.bookClicked}
                onChangeShelf={this.updateShelf}
          />
        )}
        />
      </div>
    )
  }

}

export default App;
