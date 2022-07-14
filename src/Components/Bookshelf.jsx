import Book from "./Book";

const Bookshelf = (props) => {
  const {category, list} = props;
  const options = {
    "currentlyReading": "Currently Reading",
    "wantToRead": "Want to Read",
    "read": "Read"
  }
  return (<div className="bookshelf">
    <h2 className="bookshelf-title">{options[category]}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {
          list.map((book, i)=>{
          return (<li key={i}>
            <Book book={book} category={category} options={options}/>
          </li>)
          })
        }
       
      </ol>
    </div>
  </div>);
}

export default Bookshelf;