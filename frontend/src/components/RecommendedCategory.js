import React from 'react';

const RecommendedCategory = ({ category, books }) => {
    if (!books || books.length === 0) {
        return (
            <div className="recommended-category">
                <h2>{category}</h2>
                <p>No books available in this category.</p>
            </div>
        );
    }

    return (
        <div className="recommended-category">
            <h2>{category}</h2>
            <ul>
                {/* Loop through the books and display each book title */}
                {books.map((book) => (
                    <li key={book.id}>
                        <h3>{book.volumeInfo?.title || 'No Title Available'}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecommendedCategory;

