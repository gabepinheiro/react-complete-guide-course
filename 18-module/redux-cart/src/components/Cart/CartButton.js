import { useSelector, useDispatch } from 'react-redux'
import { uiActions } from '../../store/ui-slice'

import classes from './CartButton.module.css';

const CartButton = (props) => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch()

  const toggleHandler = () => {
    dispatch(uiActions.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
