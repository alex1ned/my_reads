import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as BooksAPI from './../../BooksAPI';
import './App.css';

// --- Import componentes
import MyBooks from './../MyBooks/MyBooks.js';
import SearchBooks from './../SearchBooks/SearchBooks.js';


class BooksApp extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      allBooks: []
    };
    this.updateBookShelf = this.updateBookShelf.bind(this);
  }
  
  // state = {
  //   allBooks: []
  // }

  async componentDidMount(){
    const allBooks = await BooksAPI.getAll();
    this.setState({
      allBooks: allBooks
    })
  }

  updateBookShelf = (oneBook, event) => {
    oneBook.shelf = event;
    const allBooks = this.state.allBooks;

    // 1) If event in 'none' then exclude book from array and change state
    if (oneBook.shelf === 'none') {
      const allNewBooks = allBooks.filter(aBook => aBook.id !== oneBook.id);
      
      this.setState({
        allBooks: allNewBooks
      })
    }

    // 2) If event in is changed then change the 'shelf' property of the object
    //    and change state
    else {
      BooksAPI.update(oneBook, event);
      
      const allNewBooks = allBooks.map(aBook => {
        if (aBook.id === oneBook.id) {
          aBook.shelf = event;
        }
        return allNewBooks;
      });

      this.setState({
        allBooks: allNewBooks
      })
    }
  };


  render() {    
    return (
      <div className="app">
          {/* 2 views managed with Router: the 'MyBooks' and 'SeachBooks' */}
          
          {/* -----> 1) View of all books in shelfs (default URL with path "/") */}
          <Route exact path="/" render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <MyBooks 
                allBooks={this.state.allBooks}
                updateBookShelf={this.updateBookShelf}
              />
              <div className="open-search">
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
