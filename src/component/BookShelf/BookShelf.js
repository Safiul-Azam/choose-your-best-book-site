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
        const booksList =["জীবন যেখানে যেমন","মা, মা, মা এবং বাবা", "বেলা ফুরাবার আগে", "এবার ভিন্ন কিছু হোক", "প্রত্যাবর্তন", "আরজ আলী সমীপে",]
        
    const random = Math.floor(Math.random() * cart.length);
    // console.log(cart[random])
    console.log(random)
    // setRandom(cart[random])
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
             <h2>{random}</h2>
             
                {
                    cart.map(item => <Cart item={item}></Cart>)
                }
                <Random random={random}></Random>
                 <button onClick={()=> handlerChooseBest(cart)} className="choose-btn">Choose bast For me</button>
                 <button className="choose-btn">Remove</button>
            </div>
            
        </div>
    );
};

export default BookShelf;