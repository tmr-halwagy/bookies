import React from 'react';
import RecommendedCategory from './RecommendedCategory';

const RecommendationList = ({ booksByCategory }) => {
    return (
        <div className="recommendation-list">
            {booksByCategory.map((categoryBooks, index) => (
                <RecommendedCategory key={index} category={categoryBooks.category} books={categoryBooks.books} />
            ))}
        </div>
    );
};

export default RecommendationList;