import React from 'react';

const RecommendationList = ({ booksByCategory }) => {
    return (
        <div className="recommendation-list">
            {Object.keys(booksByCategory).map((category) => (
                <div key={category}>
                    <h2>{category}</h2>
                    <ul>
                        {booksByCategory[category].map((book) => (
                            <li key={book.id}>
                                {book.title}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default RecommendationList;