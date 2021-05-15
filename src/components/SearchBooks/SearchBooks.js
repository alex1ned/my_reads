import React, { Component } from 'react';
import './SearchBooks.css';
import OneBook from '../OneBook/OneBook.js';
import * as BooksAPI from './../../BooksAPI';
import { Link } from 'react-router-dom';

class SearchBooks extends Component {
    state = {
        searchTerm: "",
        potentialNewBooks: [],

        // potentialNewBooks: [
        //     {
        //         title: "Harry Potter and the penis",
        //         author: "JK Rowling",
        //         url: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
        //         shelf: 'none',
        //         id: 'xxkwma'
        //     }
        // ]
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
                    return {potentialNewBooks: []}
                }

                else if (searchTerm.length >= 1) {
                    return {potentialNewBooks: newBooks}
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
                        {/* !!!! also needs the searchquery term and an on querychange */}
                        <input type="text"
                               placeholder="Search by title or author"
                               value={this.state.searchTerm}
                               onChange= {(event) => this.searchForNewBooks(event.target.value)}
                        />
                    </div>
                </div>

                {/* !! Work here */}
                <div className="search-books-results">
                    <div className="books-grid">
                        {
                            this.state.potentialNewBooks.map(book => {
                                return <OneBook bookComponents={{
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
        )
    }
};

export default SearchBooks;