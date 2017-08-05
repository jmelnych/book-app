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
    this.setState((state) => console.log('update me!'))
  }

  render() {
    //console.log(this.state.books[3]);
    return (
      <div className="App">
        <Route exact path='/' render={()=>(
            <BookShelves books={this.state.books}
                         onChangeShelf={this.updateShelf}
            />
            )}
        />
        <Route path='/search' render={()=>(
            <SearchBook />
            )}
        />
      </div>
    )
  }

}

export default App;
