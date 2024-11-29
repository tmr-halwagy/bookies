import React, { useState } from "react";

const BookSearch = () => {
  const [search, setSearch] = useState("");
  const [author, setAuthor] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch(
        `/books/search/?search=${encodeURIComponent(
          search
        )}&author=${encodeURIComponent(author)}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch books.");
      }
      const data = await response.json();
      setBooks(data.books);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit" className="text-sm">
          Search
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        {books.length > 0 ? (
          <ul>
            {books.map((book, index) => (
              <li key={index}>
                <img src={book.thumbnail} alt={book.title} />
                <h3>{book.title}</h3>
                <p>Authors: {book.authors}</p>
                <a
                  href={book.infoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More Info
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BookSearch;
