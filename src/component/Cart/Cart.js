import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = (props) => {
    const {item} = props
    const {name, img} = item
    return (
        <div className="cart">
            <div className='cart-info'>
            <img src={img} alt="" />
            <p>{name}</p>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default Cart;