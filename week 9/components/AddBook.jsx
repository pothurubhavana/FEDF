import { useState } from "react";

function AddBook() {
  const [bookTitle, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [books, setBooks] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [addedBook, setAddedBook] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title: bookTitle, author, isbn };
    setAddedBook(newBook);
    setBooks([...books, newBook]);
    setShowPopup(true);
    setBookTitle("");
    setAuthor("");
    setIsbn("");
  };

  const closePopup = () => setShowPopup(false);

  return (
    <div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <div className="popup-icon">✓</div>
            <h3 className="popup-title">Book Added Successfully!</h3>
            <p className="popup-detail"><span>Title :</span> {addedBook.title}</p>
            <p className="popup-detail"><span>Author :</span> {addedBook.author}</p>
            <p className="popup-detail"><span>ISBN :</span> {addedBook.isbn}</p>
            <button className="popup-close-btn" onClick={closePopup}>OK</button>
          </div>
        </div>
      )}

      {/* Form */}
      <div className="form-panel">
        <div className="form-panel-heading">Add New Book</div>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="title">Book Title</label>
              <input
                id="title"
                type="text"
                value={bookTitle}
                onChange={(e) => setBookTitle(e.target.value)}
                placeholder="e.g. The Great Gatsby"
                required
                aria-label="Book Title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="author">Author Name</label>
              <input
                id="author"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="e.g. F. Scott Fitzgerald"
                required
                aria-label="Author Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="isbn">ISBN Number</label>
              <input
                id="isbn"
                type="text"
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
                placeholder="e.g. 978-3-16-148410-0"
                required
                aria-label="ISBN Number"
              />
            </div>
            <div className="form-group">
              <label>&nbsp;</label>
              <button type="submit" className="btn-primary">Add Book</button>
            </div>
          </div>
        </form>
      </div>

      {/* Book Table */}
      {books.length > 0 && (
        <div className="table-panel">
          <div className="table-toolbar">
            <span className="table-footer-text">Total Books : {books.length}</span>
          </div>
          <table className="book-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{book.title}</td>
                  <td className="td-author">{book.author}</td>
                  <td><span className="isbn-badge">{book.isbn}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
}

export default AddBook;