import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./Components/Search";
import Books from "./Components/Books";
import { getAll } from "./BooksAPI";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAll().then((books) => setBooks(books));
  }, [books]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Books books={books} />} />
        <Route
          path="seacrh"
          element={
            <Search
              setShowSearchpage={setShowSearchpage}
              showSearchPage={showSearchPage}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
