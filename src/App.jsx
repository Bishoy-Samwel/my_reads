import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Search from './Components/Search';
import Books from './Components/Books';
import { getAll } from './BooksAPI';

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(
    ()=>{
      getAll().then((books)=> setBooks(books))
    },[])

  return (
    <div className="App">
      {showSearchPage ? (
        <Search setShowSearchpage={setShowSearchpage} showSearchPage={showSearchPage} />
      ) : (
        <>
        <Books books={books} />
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </>
      )}

    </div>

  )
}

export default App
