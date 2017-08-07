import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookShelves from './BookShelves';
import SearchBook from './SearchBook';
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    books: [],
    booksResult: [] //SEARCH: can I have 2? DELETE
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

  // searchBook = (query) => {
  //   if (query){
  //      BooksAPI.search(query, 10)
  //       .then((booksResult) => {
  //         this.setState({booksResult}) //SEARCH: request of new books arr
  //       })
  //   }
  // }

  render() {
    //console.log(this.state.booksResult);
    return (
      <div className="App">
        <Route exact path='/' render={()=>(
            <BookShelves books={this.state.books}
                         onChangeShelf={this.updateShelf}
            />
            )}
        />
        <Route path='/search' render={()=>(
            <SearchBook  //DELETE
                      /> //DELETE
            )}
        />
      </div>
    )
  }

}

export default App;
