import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      {/* <p>hello</p> */}
      <ProductList />
    </div>
  );
};

export default Home;
