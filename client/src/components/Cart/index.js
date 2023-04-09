import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import './style.css';
import {AiOutlineShoppingCart, AiFillCloseCircle} from 'react-icons/ai'



const stripePromise = loadStripe('pk_test_51MtYp9Ez0mh6YSVXTKg8oYT8P8KB2aoOiktzz41yMRgMW7GS7zsipzLFNrbQbPSOEzpnH1Z3PoahcoFnOoLiFht000PIF5lKYj');

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
   
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
          <AiOutlineShoppingCart />
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>
        <AiFillCloseCircle className="x-icon" />
      </div>
      <h2 className="mx-3">Your Cart</h2>
      <hr></hr>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>

            {Auth.loggedIn() ? (
              <div>
              <button onClick={submitCheckout} id="add-btn" type="button" className="btn mt-2" 
              >Checkout</button>
              </div>
            ) : (
              <div className="mt-2 mb-2">
              <span>You must be logged in to check out!</span>
              </div>
            )}
          </div>
        </div>
      ) : (
        <h5>
          Your cart is empty
        </h5>
      )}
    </div>
  );
};

export default Cart;
