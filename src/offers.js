import React from "react";
import { Link } from "react-router-dom";
import Logo from "./img/logo3.png";
import "./offers.css";
import omg1 from "./img/omg1.webp";
import omg2 from "./img/omg2.webp";
import omg3 from "./img/omg3.webp";
import omg4 from "./img/omg4.webp";
import omg5 from "./img/omg5.webp";
import omg6 from "./img/omg6.webp";

function offers() {
  return (
    <div>
      <div className="container-fluid banner op-navo" id="home">
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
      <h1 className="text-white animeL">
        <span className="text-heading">Special</span> Offers
      </h1>
      <div className="row mb-2">
        <p className="mb-auto top-p">
          Explore our Special Offers Available at Hotel Transylvania, Romania{" "}
          <br />
          Downtown
        </p>
        <hr />

        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-200 position-relative border-l">
            <div className="col p-4 d-flex flex-column position-static">
              <h3 className="mb-0">
                <span className="text-heading">Good Night</span> Package
              </h3>
              <p className="mb-auto">
                Indulge in our luxurious "Good Night" package to ensure a
                restful night's sleep. With plush bedding, soft pillows, and a
                cozy comforter, you'll feel like you're sleeping on a cloud.
              </p>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img
                className="bd-placeholder-img"
                width="300"
                height="200"
                src={omg1}
                alt="My image"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 right">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-200 position-relative border-r">
            <div className="col p-4 d-flex flex-column position-static">
              <h3 className="mb-0">
                <span className="text-heading">Romance </span> Package
              </h3>
              <p className="mb-auto">
                Indulge in a luxurious and spacious room with stunning views,
                decorated with rose petals and candlelight to set the mood.{" "}
              </p>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img
                className="bd-placeholder-img"
                width="300"
                height="200"
                src={omg2}
                alt="My image"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-200 position-relative border-l">
            <div className="col p-4 d-flex flex-column position-static">
              <h3 className="mb-0">
                <span className="text-heading">Breakfast</span> Package
              </h3>
              <p className="mb-auto">
                Indulge in a full American breakfast served in the comfort of
                your room or at our restaurant. Book our "Breakfast" package to
                fuel up for a busy day of sightseeing or business meetings.{" "}
              </p>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img
                className="bd-placeholder-img"
                width="300"
                height="200"
                src={omg3}
                alt="My image"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 right">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-200 position-relative border-r">
            <div className="col p-4 d-flex flex-column position-static">
              <h3 className="mb-0">
                <span className="text-heading">Famliy Suite</span> Escape
              </h3>
              <p className="mb-auto">
                Gather the family and escape to our spacious "Family Suite
                Escape" package for an unforgettable vacation.{" "}
              </p>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img
                className="bd-placeholder-img"
                width="300"
                height="200"
                src={omg4}
                alt="My image"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-200 position-relative border-l">
            <div className="col p-4 d-flex flex-column position-static">
              <h3 className="mb-0">
                <span className="text-heading">Mother's Day </span> Delight
              </h3>
              <p className="mb-auto">
                We'll welcome your mom with a special gift, such as a bouquet of
                flowers or a box of chocolates, to make her feel truly
                appreciated.
              </p>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img
                className="bd-placeholder-img"
                width="300"
                height="200"
                src={omg5}
                alt="My image"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 right">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-200 position-relative border-r">
            <div className="col p-4 d-flex flex-column position-static">
              <h3 className="mb-0">
                <span className="text-heading">Long</span> Stay
              </h3>
              <p className="mb-auto">
                Looking for a home away from home during an extended stay? Look
                no further than our "Long Stay" package.
              </p>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img
                className="bd-placeholder-img"
                width="300"
                height="200"
                src={omg6}
                alt="My image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default offers;
