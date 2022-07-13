import Book from './Book';
const Filtered = (props) => {
  const {result} =  props 
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {
          result&&result.length>0 && result.map((book, i) => {
            return (
         <Book key={i} book={book}/>
        )
          })
        }
      </ol>
    </div>

  )
}

export default Filtered;