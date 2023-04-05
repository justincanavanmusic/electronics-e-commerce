import React from "react";
import Auth from "../../utils/auth";
import './nav.css'
import { Link } from "react-router-dom";
import Cart from "../../components/Cart/index";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div class="container-fluid" id="signUp">
          <Link to="/orderHistory">
            Order History
          </Link>
          <a href="/" onClick={() => Auth.logout()}>
            Logout
          </a>
        </div>
      );
    } else {
      return (
        <div class="container-fluid" id="signUp">
          <Link to="/signup">
            Signup
          </Link>
          <Link to="/login">
            Login
          </Link>
        </div>
      );
    }
  }

  return (

    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Electronics Shop</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
          <a class="nav-link" href="/OrderHistory">Order History</a>
          <a class="nav-link" href="#">{showNavigation()}</a>
        </div>
        <Cart />
      </div>
    </nav>

  );
}

export default Nav;
