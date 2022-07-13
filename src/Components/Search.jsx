import Filtered from "./Filtered"
import { Link } from 'react-router-dom';

const Search = (props) => {
  const {setShowSearchpage, showSearchPage} = props
  return (
    <div className="search-books">
          <div className="search-books-bar">
          <Link className="close-search" to="/">Add a book</Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <Filtered />
    </div>
  )
}

export default Search