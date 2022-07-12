import Book from "./Book";

const Bookshelf = (props) => {
  const {category, list} = props;
  return (<div className="bookshelf">
    <h2 className="bookshelf-title">{category}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {
          list.map((book, i)=>{
          return (<li key={i}>
            <Book book={book} category={category}/>
          </li>)
          })
        }
       
      </ol>
    </div>
  </div>);
}

export default Bookshelf;