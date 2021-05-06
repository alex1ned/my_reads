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
                            src={this.props.url}
                            alt='Book cover not found'
                        />
                        <div className="book-shelf-changer">
                            <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.title}</div>
                    <div className="book-authors">{this.props.author}</div>
                </div>
            </div>
        )
    }
};

export default OneBook;