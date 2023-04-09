import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Cart from "../components/Cart";
import { useStoreContext } from "../utils/GlobalState";
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from "../utils/actions";
import { QUERY_PRODUCTS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import "./pages.css";
import showPrice from '../utils/showPrice'

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});
  // console.log(currentProduct.price.toString().includes('.'))
  // console.log(typeof currentProduct.price.toString())
  console.log(currentProduct.price)

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;
  console.log(cart);

  useEffect(() => {
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    } else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise("cart", "delete", { ...currentProduct });
  };
  if(loading) {
    return <p>Loading</p>
  }
  return (
    <>
      {currentProduct && cart ? (
        <div className="container my-1" id="whiteText">
          <div className="mt-3">
            <Link className="product-link" to="/">
              ← Back to Products
            </Link>
          </div>
          <div className="flex-row">
            <div className="col-12">
              <div className="row">
                <div className="col-md-7 card-margin">
                  <h2 className="mt-3 mb-3">{currentProduct.name}</h2>
                  <hr className="line-sep"></hr>

                  <p className="mt-4 mb-4">{currentProduct.description}</p>

                  <hr className="line-sep"></hr>

                    <div className="mb-3 cart-btns">
                      <div className="price">
                     
                        <p>{showPrice(currentProduct)}</p>
                      </div>

                      <button className="btn" onClick={addToCart}>
                        Add to Cart
                      </button>
                      <br></br>
                      <br></br>
                      <button
                        className="btn"
                        disabled={
                          !cart.find((p) => p._id === currentProduct._id)
                        }
                        onClick={removeFromCart}
                      >
                        Remove from Cart
                      </button>
                      <br></br>
                      <br></br>
                    </div>
                 
                  <hr className="line-sep"></hr>
                </div>

                {/* <div className='card col-md-6 col-lg-4 product-img justify-content-center align-items-center'> */}

                <div className="card mb-5 mt-5 col-md-5 col-lg-4 product-img justify-content-center align-items-center">
                  <img
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    // height={300}
                    // width={300}
                    width="95%"
                    height="95%"
                    // img-fluid = 'maxWidth: 30%'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* {loading ? <p>Loading</p> : null} */}
    </>
  );
}

export default Detail;
