import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookShelves from './BookShelves';
import SearchBook from './SearchBook';
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    books: [] // store 3 categories: currently reading books, wants, to read
  }

 componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={()=>(
            <BookShelves
            />
            )}
        />
        <Route path='/search' render={()=>(
            <SearchBook books={this.state.books}/>
            )}
        />
      </div>
    )
  }

}

export default App;
