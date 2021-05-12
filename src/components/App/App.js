import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import * as BooksAPI from './../..BooksAPI';
import './App.css';

// --- Import componentes
import MyBooks from './../MyBooks/MyBooks.js';
import SearchBooks from './../SearchBooks/SearchBooks.js';
// import OneBook from './../OneBook/OneBook.js';


class BooksApp extends Component {
  state = {
    allBooks: []
  }

  render() {
    return (
      // Wrapper for enire app
      <div className="app">
          {/* There are two views managed with React Router: the books and seaching for books */}
          
          {/* -----> 1) View of all books in shelfs (default URL with path "/") */}
          <Route exact path="/" render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <MyBooks 
                allBooks={this.state.allBooks}
              />
              <div className="open-search">
                    {/* <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button> */}         
                    <Link 
                        to='/search'
                        className='search-books'>
                          <button>Add book</button>
                    </Link>
              </div>
            </div>
          )} />
            
                       
          {/* -----> 2) View to search for books (URL path "/search") */}
          <Route exact path="/search" render={() => (
            <SearchBooks />            
          )} />    
      </div>
    )
  }
}

export default BooksApp;
