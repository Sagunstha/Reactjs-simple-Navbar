import React, { useState, useEffect } from "react";
import "./SignUp.css";

export default function SignUp() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));
    setIsSubmit(true);
  }
  useEffect(()=>{
    console.log(formErrors);

    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
    }
  },[formErrors])

  const validate = (values) => {
    const errors ={};
    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/i;
    if(!values.username){
      errors.username= "Username is required!";
    }
    if(!values.email){
      errors.email= "Email is required!";
    }
    if(!values.password){
      errors.password= "Password is required!";
    }
    return errors;
    }
  

  return (
    <div className="container signUp">
      <section className="center">
        {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
        <form onSubmit={handleSubmit}  className="form">
          <div className="input-container ic1">
            <label for="username" className="placeholder">
              Username*
            </label>
            <input
              className="input"
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <br/>
          <p className="error-msg">{formErrors.username}</p>
          <div className="input-container ic1">
            <label for="email" className="placeholder">
              Email*
            </label>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email "
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <br/>
          <p className="error-msg">{formErrors.email}</p>
          <div className="input-container ic1">
            <label for="Password" className="placeholder">
              Password*
            </label>
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <br/>
          <p className="error-msg">{formErrors.password}</p>
          <button type="text" className="submit">
            submit
          </button>
        </form>
      </section>
    </div>
  );
}
