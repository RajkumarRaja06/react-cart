import { carts } from '../constants';
import CartItem from './CartItem';

const Cart = () => {
  if (carts.length === 0) {
    return (
      <div className='cartEmpty'>
        <h2>You Cart Is Empty</h2>
      </div>
    );
  }
  return (
    <div className='cart'>
      <h1>Shopping Cart</h1>
      {carts.map((cart) => (
        <CartItem key={cart.id} {...cart} />
      ))}
      <div className='result'>
        <button type='button' className='removeAllCart-btn'>
          Remove All Cart
        </button>
        <div className='total'>
          <span className='totalName'>Total :</span>
          <span className='totalPrice'>₹ 5000</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
