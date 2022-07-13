import Bookshelf from './Bookshelf';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Books = (props) => {
  let { books } = props
  let currentlyReading = books.filter(book => book.shelf == "currentlyReading")
  let wantToRead = books.filter(book => book.shelf == "wantToRead")
  let read = books.filter(book => book.shelf == "read")

  return (<div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <Bookshelf list={currentlyReading} category="currentlyReading" />
        <Bookshelf list={wantToRead} category="wantToRead" />
        <Bookshelf list={read} category="read" />
        <div className="open-search">
          <Link to="/seacrh">Add a book</Link>
        </div>
      </div>
    </div>
  </div>)
}

export default Books;