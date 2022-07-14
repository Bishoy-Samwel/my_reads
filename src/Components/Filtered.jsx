import Book from "./Book";
const Filtered = (props) => {
  const { result, books } = props;
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {result &&
          result.length > 0 &&
          result.map((r, i) => {
            const filteredBooks = books.filter(
              (book) => book.title === r.title
            );
            if (filteredBooks.length === 1) {
              return (
                <Book
                  key={i}
                  book={filteredBooks[0]}
                  category={filteredBooks[0].shelf}
                />
              );
            } else {
              return <Book key={i} book={r} />;
            }
          })}
      </ol>
    </div>
  );
};

export default Filtered;
