import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import './App.css'; // or './tailwind.css' if you named it differently

const BookInfo = (props ) => {
    const [book, setBook] = useState(null);
    const [error, setError] = useState(null);

    const { bookId } = useParams();
    console.log(bookId);
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
                setError('Failed to fetch book details.' + bookId);
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
    const { title, authors, description , pageCount, publishedDate, imageLinks} = volumeInfo;

    return (
        <div className="w-full max-w-full p-6">
            <div className="flex rounded-lg">
                {imageLinks?.thumbnail && (
                    <img
                        src={imageLinks.large}
                        alt={`${title} cover`}
                        style={{width: '300px', height: 'auto'}}
                    />)}

                <div className="p-4 flex flex-col justify-between w-2/3">

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            {title}
                        </h2>
                        <p className="text-gray-600 text-lg mb-4">{authors ? authors.join(', ') : 'Unknown'}</p>

                        <p className="text-gray-700 text-base mt-4">
                            {description || 'No description available.'}
                        </p>
                        <p className="text-gray-700 text-base mt-4">
                            First published {publishedDate || 'No publish date available.'}
                        </p>
                        <p className="text-gray-700 text-base mt-4">
                            Page count {pageCount || 'No page count available.'}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
        ;
};

export default BookInfo;