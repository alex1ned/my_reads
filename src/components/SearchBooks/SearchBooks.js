import React, { Component } from 'react';
import './SearchBooks.css';
import OneBook from '../OneBook/OneBook.js';
import * as BooksAPI from './../../BooksAPI';
import { Link } from 'react-router-dom';

class SearchBooks extends Component {
    state = {
        searchTerm: "",
        potentialNewBooks: [],
    }

    searchForNewBooks = (searchTerm) => {
        this.setState({
            searchTerm: searchTerm
        });

        BooksAPI.search(searchTerm)
        .then(newBooks =>(
            this.setState(currentState => {
                // const allNewBooks = newBooks;
                if (newBooks === undefined ||
                    newBooks.error ||
                    searchTerm === undefined ||
                    searchTerm === null ||
                    searchTerm.error) {
                    return {
                        potentialNewBooks: []
                    }
                }

                else if (searchTerm.length >= 1) {
                    return {
                        potentialNewBooks: newBooks
                    }
                }
            })
        ))
    };

    render() {
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        className='close-search-books'
                        to='/'    
                    >
                        <button className="close-search">Close</button>
                    </Link>
                    
                    <div className="search-books-input-wrapper">
                        <input type="text"
                               placeholder="Search by title or author"
                               value={this.state.searchTerm}
                               onChange= {(event) => this.searchForNewBooks(event.target.value)}
                        />
                    </div>
                </div>

                <div className="search-books-results">
                    <div className="books-grid">
                        {
                            this.state.potentialNewBooks.map(book => {
                                let bookURL = 'No book cover found :('
                                if(book.imageLinks !== undefined) {
                                    bookURL = book.imageLinks.smallThumbnail
                                }
                                return <OneBook bookComponents={{
                                                    url: bookURL,
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
        )
    }
};

export default SearchBooks;