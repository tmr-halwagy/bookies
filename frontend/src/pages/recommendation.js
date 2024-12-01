import React from 'react';
import RecommendationList from "../components/RecommendationList";
const recommendationData = [
    {
        category: "Science Fiction",
        books: [
            { title: "Dune" },
            { title: "Ender's Game" },
            { title: "The Hitchhiker's Guide to the Galaxy" },
        ],
    },
    {
        category: "History",
        books: [
            { title: "Sapiens: A Brief History of Humankind" },
            { title: "A Short History of Nearly Everything" },
            { title: "Guns, Germs, and Steel" },
        ],
    },
];

const RecommendationPage = () => {
    return (
        <div className="recommendation-page">
            <h1>Book Recommendations</h1>
            <RecommendationList booksByCategory={recommendationData} />
        </div>
    );
};

export default RecommendationPage;