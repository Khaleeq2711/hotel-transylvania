import React from "react";
import { Link } from "react-router-dom";
import Logo from "./img/logo3.png";

import "./login.css";

function Login() {
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
            <u>Book A Room</u>
          </b>
        </h2>

        <form className="loginForm">
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

          <label className="text-heading" for="pass">
            Password:
          </label>
          <input type="password" id="pass" name="pass" required />
          <br />
          <br />
          <br />
          <p className="text-white">
            Don't have an Account?
            <Link to="/signup" className="nav-link text-heading">
              <u>
                <b> SignUp </b>
              </u>
            </Link>
          </p>

          <div className="row">
            <div
              className="col-lg-3 col-sm-6 mt-2 div_card"
              style={{ height: "auto" }}
            >
              <div className="pricing-col card h-100">
                <div className="card-header bg-black">
                  <h2>Luxury Suite (Special Edition)</h2>
                </div>
                <div className="card-body text-white bg-black">
                  <h2 id="pricing-heading">$1,499</h2>
                  <hr />
                  <p>
                    <b>Modern</b> Style size, 350 sqm
                  </p>
                  <p>
                    <b>Window</b> Full Size, offering a city View
                  </p>
                  <p>
                    <b>Washroom</b> Fullsized (Including all Amenities)
                  </p>
                  <p>
                    <b>Facilities</b> "UHD TV, Bass Boosted Sound System, Fast
                    WIFI, Refrigerater, Coffee maker, Hairdryer"
                  </p>
                  <p>. . . . . </p>

                  <button
                    type="button"
                    className="btn btn-md d-grid col-12 mx-auto btn-outline-dark text-center"
                  >
                    Book Now<i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6 mt-2 div_card"
              style={{ height: "auto" }}
            >
              <div className="pricing-col card h-100">
                <div className="card-header bg-black">
                  <h2>Standard Suite (Single)</h2>
                </div>
                <div className="card-body text-white bg-black">
                  <h2 id="pricing-heading">$549</h2>
                  <hr />
                  <p>
                    <b>Modern</b> Style size, 200 sqm
                  </p>
                  <p>
                    <b>Windows</b> offering Light View
                  </p>
                  <p>
                    <b>Washroom</b> Med Sized (includes Soap, Tissue)
                  </p>
                  <p>
                    <b>Facilities</b> "FHD TV, Sound System, Fast WIFI "<br />
                    <br />
                  </p>
                  <p>. . . . . </p>

                  <button
                    type="button"
                    className="btn btn-md d-grid col-12 mx-auto btn-outline-dark text-center"
                  >
                    Book Now<i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6 mt-2 div_card"
              style={{ height: "auto" }}
            >
              <div className="pricing-col card h-100">
                <div className="card-header bg-black">
                  <h2>Double Rooms Suite (Large)</h2>
                </div>
                <div className="card-body text-white bg-black">
                  <h2 id="pricing-heading">$849</h2>
                  <hr />
                  <p>
                    <b>Design</b> for Double size, 300 sqm
                  </p>
                  <p>
                    <b>Windows</b> offering Light view
                  </p>
                  <p>
                    <b>Washroom</b> Med Sized (2) (Include Basic Things)
                  </p>
                  <p>
                    <b>Facilities</b> "FHD TV, Sound System, Fast WIFI"
                    <br />
                    <br />
                  </p>
                  <p>. . . . . </p>

                  <button
                    type="button"
                    className="btn btn-md d-grid col-12 mx-auto btn-outline-dark text-center"
                  >
                    Book Now<i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6 mt-2 div_card"
              style={{ height: "auto" }}
            >
              <div className="pricing-col card h-100">
                <div className="card-header bg-black">
                  <h2>Family Suite Package (New)</h2>
                </div>
                <div className="card-body text-white bg-black">
                  <h2 id="pricing-heading">$1,099</h2>
                  <hr />
                  <p>
                    <b>Family</b> Style size, 350 sqm
                  </p>
                  <p>
                    <b>Windows</b> offering a city View
                  </p>
                  <p>
                    <b>Washroom</b> Med Sized (2) (Include Basic Things)
                  </p>
                  <p>
                    <b>Facilities</b> "UHD TV, Sound System, Fast WIFI,
                    Refrigerater"
                    <br />
                    <br />
                  </p>
                  <p>. . . . . </p>

                  <button
                    type="button"
                    className="btn btn-md d-grid col-12 mx-auto btn-outline-dark "
                  >
                    Book Now<i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* <div>
              <button type="login">
                Log In <i className="fas fa-paper-plane"></i>
              </button>
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
