import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import './cartItem.css'
import {AiFillCloseCircle} from 'react-icons/ai'

const CartItem = ({ item }) => {
  console.log(item);

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    <div className="flex-row">
      <div className='cart-item-display'>
      <div className="mb-3">{item.name}</div>
      <div>
        <img
        className="mb-3"
          src={item.image}
          alt=""
        />
      </div>
      <div>
        <div className="mb-3">
        ${item.price}
        </div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <span
      
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            <AiFillCloseCircle className="del-item"/>
          </span>
          <hr></hr>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
