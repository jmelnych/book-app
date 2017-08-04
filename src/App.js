import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookShelves from './BookShelves';
import AddBook from './AddBook';
import { Route } from 'react-router-dom';

class App extends Component {
  // state = {
  //   books: []
  // }
  //  componentDidMount(){
  //   BooksAPI.getAll().then((books) => {
  //     this.setState({books}) //render as {this.state.books}
  //   })
  // }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={()=>(
            <BookShelves/>
            )}
        />
        <Route path='/add' render={()=>(
            <AddBook/>
            )} 
        />
      </div>
    )
  }

}

export default App;
