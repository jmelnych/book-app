import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Book extends Component {
    render(){
        console.log(this.props.currentBook);
        return (
                <div className="about-area">
                  <Link to='/' className="close-details">Close</Link>

                  <div className="book" key={this.props.currentBook.id}>
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
                    <div className="rating">Rating: {this.props.currentBook.averageRating}</div>
                    <div className="lang">Language: {this.props.currentBook.language}</div>
                    <div className="pages">Pages: {this.props.currentBook.pageCount}</div>
                  </div>

                  <div className="book-details-container">
                    <div className="book-title-about">{this.props.currentBook.title}</div>
                    <div className="book-authors-about">By {this.props.currentBook.authors}</div>
                    <div className="book-description">{this.props.currentBook.description}</div>
                  </div>

                </div>
            )
    }
}

export default Book;