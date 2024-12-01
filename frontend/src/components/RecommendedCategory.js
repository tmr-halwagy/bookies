import React from 'react';

const RecommendedCategory = ({ category, books }) => {
    return (
        <div className="recommended-category">
            <h1>{category}</h1>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>
                        <h1>{book.title}</h1>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecommendedCategory;