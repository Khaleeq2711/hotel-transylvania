import React from "react";
import { Link } from "react-router-dom";
import Reviews from "./reviews.js";
import Logo from "./img/logo3.png";
import "./amenities.css";

function AboutUs() {
  return (
    <div>
      <div className="container-fluid banner op-navab" id="home">
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
        <h1 className="text-center text-white animeL">
          <span className="text-heading">About </span>Us
        </h1>
        <h3 className="text-center text-white title-c">
          The hotel is iconic for Romania. It is part of the Romanian National
          Cultural Heritage.
        </h3>
      </div>

      <section id="home-info" className="bg-dark">
        <div className="info-img"></div>
        <div className="info-content">
          <h2>
            <span className="text-heading">The History</span> Of Our Hotel
          </h2>
          <p>
            The legendary and marvelous Hotel Transylvania was built in late
            90’s with the permission of Greece government under the act of
            construction for tourism plan section 429 article 2A . It took seven
            years to construct such a piece of art and luxurious hotel for the
            beloved people of Greece and their tourist . In 2004 , the Hotel
            Transylvania is inaugurated by the president of Greece Viladimir
            Putin on the occasion of independence day of Greece so it is
            considered as a gift for the public of Greece . <br />
            Initially , the hotel was consist of 5 floors and 50 rooms (each
            floor have 10 rooms) . At that time the quantity of staff of hotel
            is just 75 people only . The hotel have capacity to entertain 150
            tourist at a single time . At that time the Hotel Transylvania is
            one few five star hotels of that time and the official delicate came
            from others countries stayed there . <br />
            With the passage of time , the advancement is made in Hotel
            Transylvania to upgrade it to meet the standard of world famous
            hotel to provide facilities to there customer and tourist . Now it
            is a 110 floor hotel consider as one of the largest hotel in Greece
            with 6000 rooms and approximately 1500 employees works as staff
            member to facilitate their customers and tourist . The hotel
            Transylvania has now introduce separate suits for VIP customer and
            foreign tourist like Deluxe suit, Family suit, Luxurious suit Double
            standard suits as well with a lot of dining and amenities as well
            for there’s customer and tourist.
          </p>
          {/* <a href="" className="btn btn-light">Read More</a> */}
        </div>
      </section>

      <div className="review">
        <div>
          <Reviews />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
