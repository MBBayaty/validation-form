import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//functions
import { validate } from "../function/validate";
import { notify } from "../function/notify";

const SignUp = () => {
  const [data, setData] = useState({
    userName: "",
    email: " ",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      console.log(data);
      notify("success", "You Signed up successfully");
    } else {
      setTouched({
        userName: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
      notify("error", "Invalid information");
    }
  };

  useEffect(() => {
    setErrors(validate(data));
  }, [data, touched]);

  return (
    <div className="Main-container">
      <form onSubmit={submitHandler} className="Card_container">
        <h1 className="Card-header">SignUp</h1>
        <input
          className="Card-content "
          type="text"
          name="userName"
          placeholder="user Name"
          value={data.userName}
          onChange={changeHandler}
          onFocus={focusHandler}
        />
        {errors.userName && touched.userName && (
          <span className="error">{errors.userName}</span>
        )}
        <input
          className="Card-content "
          type="email"
          name="email"
          placeholder="Enter your email"
          value={data.email}
          onChange={changeHandler}
          onFocus={focusHandler}
        />
        {errors.email && touched.email && (
          <span className="error">{errors.email}</span>
        )}

        <input
          className="Card-content "
          type="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={changeHandler}
          onFocus={focusHandler}
        />
        {errors.password && touched.password && (
          <span className="error">{errors.password}</span>
        )}

        <input
          className="Card-content "
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={data.confirmPassword}
          onChange={changeHandler}
          onFocus={focusHandler}
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <span className="error">{errors.confirmPassword}</span>
        )}

        <div className="checkbox">
          <label>The terms and policy are accepted</label>
          <input
            type="checkbox"
            name="isAccepted"
            value={data.isAccepted}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.isAccepted && touched.isAccepted && (
            <span className="error-checkbox">{errors.isAccepted}</span>
          )}
        </div>
        <div className="btn">
          <button className="btn-content">SignUp</button>
          <Link to="/login">Login</Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
