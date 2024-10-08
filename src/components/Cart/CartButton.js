// CartButton.js
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = () => {
    const dispatch = useDispatch();
    const cartQuantity = useSelector(state => state.cart ? state.cart.totalQuantity : 0); // Hata kontrolü ekleyin

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    };

    return (
        <button className={classes.button} onClick={toggleCartHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{cartQuantity}</span>
        </button>
    );
};

export default CartButton;
