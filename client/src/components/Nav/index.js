import React from "react";
import Auth from "../../utils/auth";
import './nav.css'
import { Link } from "react-router-dom";
import Cart from "../../components/Cart/index";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Electronics Shop</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
            <a class="nav-link" href="/OrderHistory">Order History</a>
            <a class="nav-link" href="/" onClick={() => Auth.logout()}>Logout</a>
          </div>
          <Cart />
        </div>
      );
    } else {
      return (
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Electronics Shop</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
            <a class="nav-link" href="/OrderHistory">Order History</a>
            <a class="nav-link" href="/Login">Login</a>
            <a class="nav-link" href="/Signup">Signup</a>
          </div>
          <Cart />
        </div>
      );
    }
  }

  return (

    <nav class="navbar navbar-expand-lg bg-light" id="navContainer">
      {showNavigation()}
    </nav>

  );
}

export default Nav;

{/* <div class="container-fluid" id="signUp">
<Link to="/orderHistory">
  Signup
</Link>
<a href="/" onClick={() => Auth.logout()}>
  Logout
</a>
</div> */}