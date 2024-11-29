import React from "react";
import ResultCard from "./ResultCard";

const ResultList = ({ books }) => {
  return (
    <div className="flex flex-col">
      {books.length > 0 ? (
        <ul>
          {books.map((book, index) => (
            <ResultCard key={index} book={book} />
          ))}
        </ul>
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
};

export default ResultList;
