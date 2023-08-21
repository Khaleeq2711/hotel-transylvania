import React from "react";
import { Link } from "react-router-dom";
import Logo from "./img/logo3.png";
import "./signup.css";

function Signup() {
  return (
    <div className="loginBack">
      <nav className="navbar navbar-md">
        <div className="navbar-brand">
          <img
            className="animeB"
            src={Logo}
            style={{ height: "70px", marginLeft: "20%" }}
          />
        </div>
        <ul className="nav" style={{ marginRight: "20%" }}>
          <li className="nav-item">
            <Link to="/" className="nav-link text-heading">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link text-heading">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="contact-d">
        <h2 className="text-center">
          <b>
            <u>SIGN UP</u>
          </b>
        </h2>
        <form className="loginForm">
          <label className="text-heading" for="f_name">
            First Name:
          </label>
          <input type="text" id="f_name" name="f_name" required />

          <label className="text-heading" for="s_name">
            Surname:
          </label>
          <input type="text" id="s_name" name="s_name" required />

          <label className="text-heading" for="dob">
            Date of Birth:
          </label>
          <input type="datetime-local" id="dob" name="dob" required />

          <label className="text-heading" for="cnic">
            CNIC/Passport Number:
          </label>
          <input
            type="text"
            id="cnic"
            name="cnic"
            required
            placeholder="xxxxx-xxxxxxx-x"
          />

          <label className="text-heading" for="num">
            Phone Number:
          </label>
          <input
            type="number"
            id="num"
            name="num"
            placeholder="03xx-xxxxxxx"
            required
          />

          <label className="text-heading" for="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="abc123@xyz.com"
          />

          <label className="text-heading" for="gender">
            Gender:
          </label>
          <select
            className="text-heading select"
            id="gender"
            name="gender"
            required
          >
            <option selected>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <label className="text-heading" for="pass">
            Password:
          </label>
          <input type="password" id="pass" name="pass" required />
          <p className="pSignup">
            Pasword must be atleast 8 digits consist of uppercase and lowercase
            letters, numbers and special characters
          </p>

          <label className="text-heading" for="c_pass">
            Confirm Password:
          </label>
          <input type="password" id="c_pass" name="c_pass" required />

          <button type="signup">
            Sign Up <i className="fas fa-check-circle"></i>
          </button>
          <br />
          <br />
          <br />
          <p className="text-white">
            Already have an Account?
            <Link to="/login" className="nav-link text-heading">
              <u>
                <b> Log In </b>
              </u>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
