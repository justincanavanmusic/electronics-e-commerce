import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import './pages.css'

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
    console.log(user)
  }

  return (
    <>
      <div className="container my-1 mt-3">
        <Link id="link-color" to="/">← Back to Products</Link>

        {user ? (
          <>
            <h2 className="mt-3" id='o-name'>
              Order History for {user.firstName} {user.lastName}
            </h2>

            <hr className="line-sep"></hr>

            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
             
                <div className="flex-row">
                  <div className="col-12">
                  
                    {order.products.map(({ _id, image, name, price }, index) => (
                      
                      <div key={index} className="card px-1 py-1 item-card">
                        <div className='row'>
                        <div className="col-md-8">
                        <h2 id="name-tag">{name}</h2>
                        <Link className="oh-container" to={`/products/${_id}`}>
                          <img alt={name} src={image} className='order-history' />

                        </Link>
                        </div>
                        
                      <div className='order-info col-md-4'>
                      <p id='o-id'>Order ID: <br></br> {order._id}</p>
                        <p id='o-date'>Ordered: <br></br> {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</p>
                        </div>
                        
                        </div>
                        
                        {/* <Link class="oh-container" to={`/products/${_id}`}>
                          <img alt={name} src={image} className='order-history' />

                        </Link> */}
                        <div>
                          <span id="price-span">${price.toString().includes('.') ? price : price + '.00'}</span>
                        </div>
                        <hr class="line-sep"></hr>
                      </div>
                    
                    ))}
                  </div>
                  

                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default OrderHistory;
