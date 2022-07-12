const Book = (props) => {
  const category = props.category;
  const options = {
    "currentlyReading": "Currently Reading",
    "wantToRead": "Want to Read",
    "read": "Read"
  }
  return (<div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage:
            'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
        }}
      ></div>
      <div className="book-shelf-changer">
        <select>
          <option value="none" disabled>Move to...</option>,
          {
            Object.keys(options).map((key,i) => 
            {
              if (key !== category) {
              return (<option key={i} value={key} >{options[key]}</option>)
              }
            })
          }
        </select>
      </div>
    </div>
    <div className="book-title">To Kill a Mockingbird</div>
    <div className="book-authors">Harper Lee</div>
  </div>)
}

export default Book;