import React, { Component } from 'react';
import './OneBook.css';


const bookCoverImageStyle = {
    width: 128,
    height: 193,
    border: "red",
};

class OneBook extends Component {
    render() {
        return (
            <div>
                <div className="book">
                    <div className="book-top">
                        <img
                            className="book-cover"
                            style={bookCoverImageStyle}
                            src={this.props.bookComponents.url}
                            alt='Book cover not found'
                        />
                        <div className="book-shelf-changer">
                            {/* This needs to change! */}
                            <select onChange={event => this.props.updateBookShelf(this.props.bookComponents, event.target.value)} value={this.props.bookComponents.shelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.bookComponents.title}</div>
                    <div className="book-authors">{this.props.bookComponents.author}</div>
                </div>
            </div>
        )
    }
};

export default OneBook;