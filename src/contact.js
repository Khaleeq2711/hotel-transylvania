import React from "react";
import { Link } from "react-router-dom";
import Logo from "./img/logo3.png";

import "./amenities.css";

function Contact() {
  return (
    <div>
      <div className="container-fluid banner op-navc" id="home">
        <div className="row animeB">
          <div className="col-md-12">
            <nav className="navbar navbar-md">
              <div className="navbar-brand  Logo">
                <img className="animeB" src={Logo} style={{ height: "70px" }} />
              </div>
              <ul className="nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/offers" className="nav-link">
                    Offers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dinning" className="nav-link">
                    Dining & Drinks
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/amenities" className="nav-link">
                    Amenities
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <hr className="animeR text-white" />

      <div>
        <h1 className="text-center text-white animeR">
          <span className="text-heading">Contact</span> Info
        </h1>
        <h3 className="text-center text-white title-c">
          Location / Europe / Romania / Romanian Hotels / Transylvania, Romania,
          Downtown / Contact
        </h3>
      </div>

      <div className="row  c-info">
        <div className="col-lg-6 contact">
          <h5>
            <span className="text-heading">
              Phone(Hotline) <i className="fas fa-phone"></i> :
            </span>
            +40 (20) 222-5555, +40 (20) 222-5566
          </h5>
          <hr />
          <h5>
            <span className="text-heading">
              Mobile <i className="fas fa-mobile-alt"></i> :
            </span>
            +40 (636) 333-6666
          </h5>
          <hr />
          <h5>
            <span className="text-heading">
              Hotel Transylvania <i className="fas fa-home"></i> :
            </span>
            <br />
            <u>11, Down Street</u> <br />
            (across The National Bank of Romania),
            <br /> Downtown, Romania
          </h5>
          <hr />
          <h5>
            <span className="text-heading">
              Email <i className="fas fa-envelope"></i> :
            </span>
            transylvania_hotel@gmail.com
          </h5>
          <hr />
        </div>
        <div className="col-lg-6 p-5 cover map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11050.800766484586!2d21.30388488038103!3d46.17662348751062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474598fff699d6a5%3A0x218dfabe199634e2!2sDowntown%2C%20Arad%2C%20Romania!5e0!3m2!1sen!2s!4v1683461184293!5m2!1sen!2s"
            width="100%"
            height="450px"
            style={{ border: "2px solid #b4906d", borderRadius: "5%" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <hr />
      </div>

      <div className="contact-d">
        <form>
          <label className="text-heading" for="name">
            Name:
          </label>
          <input type="text" id="name" name="name" required />

          <label className="text-heading" for="email">
            Email:
          </label>
          <input type="email" id="email" name="email" required />

          <label className="text-heading" for="message">
            Message:
          </label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit">
            Submit <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>

      {/* <div className="row text-center text-white mb-5">
<hr/>
    <div className="col-md-3"><li>Connecting Rooms</li></div>
    <div className="col-md-3"><li>Free WiFi</li></div>
    <div className="col-md-3"><li>Smoke-free</li></div>
    <div className="col-md-3"><li>Digital Key</li></div>
    <div className="col-md-3"><li>Concierge</li></div>
    <div className="col-md-3"><li>Luxury</li></div>
    <div className="col-md-3"><li>On-site restaurant</li></div>
    <div className="col-md-3"><li>Fitness center</li></div>
    <div className="col-md-3"><li>Pet-Friendly</li></div>
    <div className="col-md-3"><li>Room service</li></div>
    <div className="col-md-3"><li>Business center</li></div>
    <div className="col-md-3"><li>Meeting rooms</li></div>
    <hr/>
</div> */}
    </div>
  );
}

export default Contact;
