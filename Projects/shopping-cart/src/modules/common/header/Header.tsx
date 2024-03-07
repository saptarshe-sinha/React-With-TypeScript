import { useNavigate } from 'react-router-dom'
import './Header.css'
import { useContext } from 'react';
import { DataContext } from '../../../context/DataContextProvider';

const Header = () => {

  const {cartItemCount} = useContext(DataContext)
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/')
  }

  const goToCart = () =>{
    navigate('/cart')
  }

  return (
    <header>
      <div className="header">
        <div onClick={goToHome} className="logo">
          <h4 className="sweet">Food Zone</h4>
          <img
            src='/assets/food.png'
            width="45px"
            height="45px"
            style={{marginLeft: 10}}
            alt='logo'
          />
        </div>
        <div 
          className="d-flex justify-content-evenly pt-2"
          style={{width: 300}}
        >
          <i onClick={goToCart} className='fa fa-shopping-cart cart-icon'></i>
          <span className='cart-count'>{cartItemCount}</span>
          <h5 className='login'>Login</h5>
          <h5 className='register'>Sign Up</h5>
        </div>
      </div>
    </header>
  )
}

export default Header
