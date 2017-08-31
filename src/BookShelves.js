import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class BookShelves extends Component {
    render(){
        /* filter by bookshelves for further mapping in UI */
        const currentlyReadingBooks = this.props.books.filter(book=>
            book.shelf === 'currentlyReading')
        const wantToReadBooks = this.props.books.filter(book=>
            book.shelf === 'wantToRead')
        const readBooks = this.props.books.filter(book =>
            book.shelf === 'read')
        //console.log(this.props.books);
        return (
            <div className="bookshelves">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Currently Reading</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                    {currentlyReadingBooks.map((book)=>(
                                        <li key={book.id}>
                                          <div className="book">
                                            <div className="book-top">
                                              <Link to={'/book/' + book.id}><div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}
                                              onClick={() => this.props.aboutBook(book)}></div></Link>

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

                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Want to Read</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                    {wantToReadBooks.map((book)=>(
                                        <li key={book.id}>
                                          <div className="book">
                                            <div className="book-top">
                                              <Link to={'/book/' + book.id}><div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}
                                              onClick={() => this.props.aboutBook(book)}></div></Link>
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

                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Read</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                    {readBooks.map((book)=>(
                                        <li key={book.id}>
                                          <div className="book">
                                            <div className="book-top">
                                              <Link to={'/book/' + book.id}><div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}
                                              onClick={() => this.props.aboutBook(book)}></div></Link>
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
                        </div>
                    </div>
                    <div className="open-search">
                        <Link
                        to='/search'>Add a book</Link>
                    </div>
                </div>
             </div>)
    }
}

export default BookShelves;