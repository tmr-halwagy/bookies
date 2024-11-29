import React, { useState, useEffect } from 'react';

const BookInfo = ({ bookId }) => {
    const [book, setBook] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/books/v1/volumes/${bookId}`
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch book details');
                }
                const data = await response.json();
                setBook(data);
            } catch (err) {
                setError('Failed to fetch book details.');
            }
        };

        fetchBookDetails();
    }, [bookId]);

    if (error) {
        return <p>{error}</p>;
    }

    if (!book) {
        return <p>Loading...</p>;
    }

    const { id, volumeInfo } = book;
    const { title, authors, description , imageLinks} = volumeInfo;

    return (
        <div>
            <h2>Book Details</h2>
            {imageLinks?.thumbnail && (
                <img
                    src={imageLinks.thumbnail}
                    alt={`${title} cover`}
                    style={{ width: '150px', height: 'auto' }}
                />
            )}

            <p><strong>ID:</strong> {id}</p>
            <p><strong>Name:</strong> {title}</p>
            <p><strong>Author(s):</strong> {authors ? authors.join(', ') : 'Unknown'}</p>
            <p><strong>Description:</strong> {description || 'No description available.'}</p>
        </div>
    );
};

export default BookInfo;

