import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import OneBook from '../OneBook/OneBook.js';
import './MyBooks.css';


class MyBooks extends Component {
    state = {

    }
    
    render() {
        const currentReading = this.props.allBooks.filter(oneBook => oneBook.shelf === "currentlyReading");
        const wantRead = this.props.allBooks.filter(oneBook => oneBook.shelf === "wantToRead");
        const read = this.props.allBooks.filter(oneBook => oneBook.shelf === "read");

        return (
            <div>                
                {/* ---> Current Reading */}
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <div className="books-grid">
                            {
                                currentReading.map(book => {
                                    return <OneBook 
                                                    bookComponents={{
                                                        url: book.imageLinks.smallThumbnail,
                                                        title: book.title,
                                                        author: book.author,
                                                        id: book.id,
                                                        shelf: book.shelf
                                                    }}
                                                    updateBookShelf={this.props.updateBookShelf}
                                           />             
                                })
                            }
                        </div>
                    </div>
                </div>


                {/* ---> Wanted Reading */}
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <div className="books-grid">
                            {
                                wantRead.map(book => {
                                    return <OneBook 
                                                    bookComponents={{
                                                        url: book.imageLinks.smallThumbnail,
                                                        title: book.title,
                                                        author: book.author,
                                                        id: book.id,
                                                        shelf: book.shelf
                                                    }}
                                                    updateBookShelf={this.props.updateBookShelf}
                                            />             
                                })
                            }
                        </div>
                    </div>
                </div>


                {/* ---> Alredy Read */}
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <div className="books-grid">
                            {
                                read.map(book => {
                                    return <OneBook 
                                                    bookComponents={{
                                                        url: book.imageLinks.smallThumbnail,
                                                        title: book.title,
                                                        author: book.author,
                                                        id: book.id,
                                                        shelf: book.shelf
                                                    }}
                                                    updateBookShelf={this.props.updateBookShelf}
                                            />          
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default MyBooks;