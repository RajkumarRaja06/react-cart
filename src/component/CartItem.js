import React from 'react';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import '../styles/index.css';

const CartItem = ({ img, name, price, quantity }) => {
  return (
    <article>
      <div className='image-container'>
        <img src={img} alt={name} />
      </div>
      <div className='data-container'>
        <h3 className='product-name'>{name}</h3>
        <h5 className='product-price'>₹{price}</h5>
        <div className='quantity-container'>
          <div className='quantity-plus'>
            <AiOutlinePlusSquare />
          </div>
          <span className='quantity'>{quantity}</span>
          <div className='quantity-minus'>
            <AiOutlineMinusSquare />
          </div>
        </div>
        <button type='button' className='delete-btn'>
          Delete
        </button>
      </div>
    </article>
  );
};

export default CartItem;
