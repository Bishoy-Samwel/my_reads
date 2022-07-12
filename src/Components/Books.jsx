import Bookshelf from './Bookshelf';
const Books = () => {
  return (<div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <Bookshelf category="currentlyReading"/>
        <Bookshelf category="wantToRead"/>
        <Bookshelf category="read"/>
      </div>
    </div>
  </div>)
}

export default Books;