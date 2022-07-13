import { update } from "../BooksAPI";
const Book = (props) => {
  const { category, book } = props;
  const options = {
    currentlyReading: "Currently Reading",
    wantToRead: "Want to Read",
    read: "Read",
  };
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${book.imageLinks.thumbnail}")`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            defaultValue={category}
            onChange={(e) => update(book, e.target.value)}
          >
            <option value="none" disabled>
              Move to...
            </option>
            ,
            <option value={category} disabled>
              {options[category]}
            </option>
            ,
            {Object.keys(options).map((key, i) => {
              if (key !== category) {
                return (
                  <option key={i} value={key}>
                    {options[key]}
                  </option>
                );
              }
            })}
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      {book.authors &&
        book.authors.map((author, i) => (
          <div key={i} className="book-authors">
            {author}
          </div>
        ))}
    </div>
  );
};

export default Book;
