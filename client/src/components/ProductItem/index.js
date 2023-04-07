import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import './productItem.css'

import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  console.log(item)

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  console.log(typeof price);

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    <div id="product-cards" className="card px-3 py-3" style={{ margin: '1vw' }}>
      <p>{name}</p>
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={image}
          height="150vh"
          width="150vw"
          padding="2vw"
          className="cardImage"
        />
      </Link>
      <span className="mt-2">${price.toString().includes('.') ? price : price + '.00'}</span>
      <div class="btn-box">
        <button id="add-btn-2" onClick={addToCart} type="button" className="btn btn-primary mt-2">Add to cart</button>
      </div>
    </div>
  );
}

export default ProductItem;
