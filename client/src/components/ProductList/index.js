import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import './productList.css'

function ProductList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;
  console.log(state)
  console.log(dispatch)

  const { loading, data } = useQuery(QUERY_PRODUCTS);
  console.log(data)

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <div className="container text-center my-2">
      
      <h2 className="text-center"
      id='r-product'>Our Products:</h2>
   
      {state.products.length ? (
        <div className="row">
        
          {filterProducts().map((product) => (
            <div className="col-sm-12 col-md-6 col-lg-4">
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
           </div>
          ))}
           </div>
      
 
    // <div className="container my-2">
       
    //  <h2 className="text-center"
    //   id='r-product'>Our Products:</h2>
      
   
    //   {state.products.length ? (
       
    //     <div className="d-flex justify-content-evenly flex-wrap">
    //       <div className="col-12 col-sm-6 col-lg-4">
    //       {filterProducts().map((product) => (
    //         <ProductItem
    //           key={product._id}
    //           _id={product._id}
    //           image={product.image}
    //           name={product.name}
    //           price={product.price}
    //           quantity={product.quantity}
    //         />
            
    //       ))}
          
    //       </div>
    //       </div>
    

      ) : (
        
        <h3>You haven't added any products yet!</h3>
        
      )}
      {loading ? <p>Loading</p> : null}
     
    </div>
  );
}

export default ProductList;
