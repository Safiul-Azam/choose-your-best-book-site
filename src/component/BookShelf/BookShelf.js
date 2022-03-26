import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import Cart from '../Cart/Cart';
import './BookShelf.css'

const BookShelf = () => {
    const [books, setBooks] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    const handlerAddToChoose = (book) => {
        const newBook = [...cart,book]
        setCart(newBook)
    }

    return (
        <div className="container">
            <div className="books-container">
                {
                    books.map(book => <Books
                        key={book.id}
                        book={book}
                        addToChoose={handlerAddToChoose}
                        ></Books>)
                }
            </div>
            <div className="cart-container">
             <div className='header'>
             <h2>Choose book list</h2>
             </div>
                {
                    cart.map(item => <Cart key={item.id} item={item}></Cart>)
                }
            </div>
            
        </div>
    );
};

export default BookShelf;