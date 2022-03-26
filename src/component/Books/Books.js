import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Books.css'

const Books = (props) => {
    const {book,addToChoose} = props
    const {name, img, price} = book
    return (
        <div className="single-book">
          <img src={img} alt="" />
           <div className="book-info">
                <h3>{name}</h3>
               <p>Price: {price}</p>
           </div>
           <button className="cart-btn" onClick={()=>addToChoose(book)}>
               <p>Add to cart</p>
               <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default Books;