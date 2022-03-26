import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import Cart from '../Cart/Cart';
import Random from '../Random/Random';
import './BookShelf.css'

const BookShelf = () => {
    const [books, setBooks] = useState([])
    const [cart, setCart] = useState([])
    const [random, setRandom]= useState([])
    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    const handlerAddToChoose = (book) => {
        const newBook = [...cart,book]
        setCart(newBook)
    }
    const handlerChooseBest = (cart) => {

            const random = Math.floor(Math.random() * cart.length);
            const rrr = cart[random]
            setRandom(rrr)
            setCart([])
    }
    const handlerRemoveFromCart = (cart)=>{
        setCart([])

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
             <h2>Choose book list</h2>
             <Random random={random}></Random>
                {
                    cart.map(item => <Cart key={item?.id} item={item}></Cart>)
                }
                
                 <button onClick={ () => handlerChooseBest(cart)} className="choose-btn">Choose bast For me</button>
                 <button onClick={() => handlerRemoveFromCart(cart)} className="choose-btn">Remove</button>
               
            </div>
            
        </div>
    );
};

export default BookShelf;