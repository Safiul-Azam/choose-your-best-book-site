import React, { useState } from 'react';
import Books from '../Books/Books';
import './BookShelf.css'

const BookShelf = () => {
    const [books, setBooks] = useState([])
    useState(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div className="container">
            <div className="books-container">
                {
                    books.map(book => <Books book={book}></Books>)
                }
            </div>
            <div className="cart-container">
                <h2>cart</h2>
            </div>
            
        </div>
    );
};

export default BookShelf;