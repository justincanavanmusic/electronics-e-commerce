import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css'

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
            <h2 className="mt-3 mb-2">
              Order History for {user.firstName} {user.lastName}
            </h2>
            <hr></hr>
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <div className="flex-row">
                  <div class="col-12">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link id="order-img" to={`/products/${_id}`}>
                        <img alt={name} src={image} />
                        <p>{name}</p>
                    <div key={index} className="card px-1 py-1 item-card">
                      <p>Ordered: {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</p>
                      <h2 id="name-tag">{name}</h2>
                      <Link class="oh-container" to={`/products/${_id}`}>
                        <img alt={name} src={image} className='order-history'/>
                        
                      </Link>
                      <div>

                        <span>{name}</span>

                        <span id="price-span">${price}</span>

                      </div>
                      <hr></hr>
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
