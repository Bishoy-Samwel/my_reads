import Book from "./Book";

const Bookshelf = (props) => {
  const {category} = props;
  return (<div className="bookshelf">
    <h2 className="bookshelf-title">{category}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        <li>
          <Book category={category}/>
        </li>
      </ol>
    </div>
  </div>);
}

export default Bookshelf;