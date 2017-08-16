import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Book extends Component {
    render(){
        console.log(this.props.currentBook);
        return (
                <div className="search-books">

                      <Link to='/' className="close-search">Close</Link>

                    <div className="search-books-results">
                      <ol className="books-grid">

                            <li key={this.props.currentBook.id}>
                              <div className="book">
                                <div className="book-top">
                                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.currentBook.imageLinks.thumbnail})` }}></div>
                                  <div className="book-shelf-changer" >
                                    <select value={this.props.currentBook.shelf || "none"} onChange={(e)=> this.props.onChangeShelf(this.props.currentBook, e.target.value)}>
                                      <option value="none" disabled>Move to...</option>
                                      <option value="currentlyReading">Currently Reading</option>
                                      <option value="wantToRead">Want to Read</option>
                                      <option value="read">Read</option>
                                      <option value="none">None</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="book-title">{this.props.currentBook.title}</div>
                                <div className="book-authors">{this.props.currentBook.authors}</div>
                              </div>
                            </li>


                        </ol>
                    </div>
                </div>
            )
    }
}

export default Book;