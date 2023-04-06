import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import './pages.css'

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div id="login-text" className="container my-1">
      <Link id="link-color" to="/login">← Go to Login</Link>

      <h2 className="mt-3 mb-3">Sign Up</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3 col-sm-4">
          <label htmlFor="exampleFormControlInput1">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            className="form-control"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 col-sm-4">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            className="form-control"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 col-sm-4">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="name@example.com"
            name="email"
            type="email"
            className="form-control"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 col-sm-4">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            className="form-control"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
        <button id="add-btn"type="submit" className="btn btn-primary mt-2">Submit</button>
          {/* <button type="submit">Submit</button> */}
        </div>
      </form>
    </div>
  );
}

export default Signup;
