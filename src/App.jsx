import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Search from './Components/Search';
import Books from './Components/Books';

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="App">
      {showSearchPage ? (
        <Search setShowSearchpage={setShowSearchpage} showSearchPage={showSearchPage} />
      ) : (
        <>
        <Books />
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </>
      )}

    </div>

  )
}

export default App
