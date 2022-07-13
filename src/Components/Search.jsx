import Filtered from "./Filtered";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import { useState } from "react";

const Search = (props) => {
  const { setShowSearchpage, showSearchPage } = props;
  const [result, setResult] = useState([]);
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Add a book
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => {
              search(e.target.value, 100).then((r) => setResult(r));
            }}
          />
        </div>
      </div>
      <Filtered result={result} />
    </div>
  );
};

export default Search;
