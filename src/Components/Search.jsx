import Filtered from "./Filtered"

const Search = (props) => {
  const {setShowSearchpage, showSearchPage} = props
  return (
    <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => {setShowSearchpage(!showSearchPage)}}
            >
              Close
            </a>
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