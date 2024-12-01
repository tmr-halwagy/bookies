import React, { useState, useEffect } from 'react';
import RecommendationList from "../components/RecommendationList";

const API_ENDPOINT = 'https://www.googleapis.com/books/v1/volumes?q=';

const RecommendationPage = () => {
    const [categories] = useState(['Science Fiction', 'History', 'Romance']);
    const [recommendationData, setRecommendationData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allResults = {};
                for (const category of categories) {
                    const url = `${API_ENDPOINT}${category}`;

                    const response = await fetch(url);

                    if (!response.ok) {
                        throw new Error(`Error fetching books for category '${category}': Status Code ${response.status}`);
                    }

                    const data = await response.json();
                    const books = data?.items || [];
                    const sortedBooks = books.slice(0, 3)
                    allResults[category] = sortedBooks;
                }

                setRecommendationData(allResults);
            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <p>Loading recommendations...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="recommendation-page">
            <h1>Book Recommendations</h1>
            <RecommendationList booksByCategory={recommendationData} />
        </div>
    );
};

export default RecommendationPage;