import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookShelves from './BookShelves';
import SearchBook from './SearchBook';
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    books: []
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


  render() {
    //console.log(this.state.books);
    return (
      <div className="App">
        <Route exact path='/' render={()=>(
            <BookShelves books={this.state.books}
                         onChangeShelf={this.updateShelf}
            />
            )}
        />
        <Route path='/search' render={()=>(
            <SearchBook onChangeShelf={this.updateShelf}
                        books={this.state.books}
                      />
            )}
        />
      </div>
    )
  }

}

export default App;
