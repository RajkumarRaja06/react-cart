import { BsCart4 } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav>
      <h3 className='cartName'>Cart</h3>
      <div className='cart-container'>
        <span className='cartIcon'>
          <BsCart4 />
        </span>
        <span className='count'>1</span>
      </div>
    </nav>
  );
};

export default Navbar;
