import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import './pages.css'

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link id="link-color" to="/signup">← Go to Signup</Link>

      <h2 className="mt-3 mb-3">Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3 col-sm-4">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="name@example.com"
            id="email"
            onChange={handleChange}
          ></input>
        </div>
        {/* <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address: </label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div> */}
        <div className="mb-3 col-sm-4">
          <label htmlFor="exampleFormControlInput1" class="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="pwd"
            placeholder="******"
            onChange={handleChange}
          ></input>
        </div>
        {/* <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password: </label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div> */}
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
        <button id="add-btn"type="submit" className="btn btn-primary mt-2">Submit</button>
         
          {/* <button type="submit">Submit</button> */}
        </div>
      </form>
    </div>
  );
}

export default Login;
