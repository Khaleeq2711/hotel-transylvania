import React from "react";
import { Link } from "react-router-dom";
import Logo from "./img/logo3.png";
import "./amenities.css";

function Amenities() {
  return (
    <div>
      <div className="container-fluid banner op-navam" id="home">
        <div className="row animeB">
          <div className="col-md-12">
            <nav className="navbar navbar-md">
              <div className="navbar-brand">
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

      <h1 className=" text-white">
        <p className="animeL">OUR </p>
        <p className="text-heading animeR">AMENITIES</p>
      </h1>
      <h3 className="text-center text-white">
        Discover our range of services, amenities, and things to do In and
        Around the Hotel.
      </h3>

      <div className="row text-center text-white mb-5">
        <hr />
        <div className="col-md-2 col-sm-4">
          <i className="fas fa-link"></i>
          <p>Connecting Rooms</p>
        </div>
        <div className="col-md-2 col-sm-4">
          <i className="fas fa-wifi"></i>
          <p>Free WiFi</p>
        </div>
        <div className="col-md-2 col-sm-4">
          <i className="fas fa-smoking-ban"></i>
          <p>Smoke-free</p>
        </div>
        <div className="col-md-2 col-sm-4">
          <i className="fas fa-key"></i>
          <p>Digital Key</p>
        </div>
        <div className="col-md-2 col-sm-4">
          <i className="fas fa-concierge-bell"></i>
          <p>Concierge</p>
        </div>
        <div className="col-md-2 col-sm-4">
          <i className="fas fa-crown"></i>
          <p>Luxury</p>
        </div>
        <div className="col-md-2 col-sm-4">
          <i className="fas fa-utensils"></i>
          <p>On-site restaurant</p>
        </div>
        <div className="col-md-2 col-sm-4">
          <i className="fas fa-dumbbell"></i>
          <p>Fitness center</p>
        </div>
        <div className="col-md-2 col-sm-4">
          <i className="fas fa-cat"></i>
          <p>Pet-Friendly</p>
        </div>
        <div className="col-md-2 col-sm-4">
          <i className="fas fa-coffee"></i>
          <p>Room service</p>
        </div>
        <div className="col-md-2 col-sm-4">
          <i className="fas fa-chart-line"></i>
          <p>Business center</p>
        </div>
        <div className="col-md-2 col-sm-4">
          <i className="fas fa-users"></i>
          <p>Meeting rooms</p>
        </div>
        <hr />
      </div>

      <div className="row ameneDef">
        <div className="col-lg-6  destDef">
          {" "}
          <h2 className="text-white">
            Your <span className="text-heading">Downtown</span> Destination
          </h2>
          <p>
            From world-className cuisine to contemporary architecture,
            Transalvania Romania Downtown offers a luxurious stay. Perfectly
            positioned in downtown Area, our hotel provides spacious, upscale
            amenities for an exciting city getaway or business trip..
          </p>
        </div>
        <div className="col-lg-6  destPic"></div>
        <div className="my-hr"></div>

        <div className="col-lg-6 explDef">
          {" "}
          <h2 className="text-white">
            Explore <span className="text-heading">Romania</span>
          </h2>
          <p>
            Located adjacent to Dambovita River in Battery Park, and only a few
            minutes from Carpathian mountains, Sinaia Monastery, and the
            Transfagarasan Highway, Hotel Transalvania Romania Downtown has many
            of the city’s attractions right on its doorstep. Uncover all there
            is to see in the city from our perfect Lower Bucharest Downtown
            Base..
          </p>
          <a
            href="https://www.google.com/maps/place/Downtown,+Arad,+Romania/@46.1766301,21.3199848,14.75z/data=!4m6!3m5!1s0x474598fff699d6a5:0x218dfabe199634e2!8m2!3d46.1738194!4d21.3135088!16s%2Fg%2F1thr5z4m"
            className="btn btn-md text-center"
          >
            Explore <i className="fas fa-globe"></i>
          </a>
        </div>
        <div className="col-lg-6 explPic"></div>

        <h1 className="text-center text-white">
          {" "}
          <hr /> <hr />
          <span className="text-heading">SUSTAINABILITY</span>
        </h1>
        <h6 className="text-white  text-center mb-5">
          At Transalvania Romania Downtown, sustainability is extremely
          important to us. Discover how we reduce our carbon footprint and Other
          within the hotel.
        </h6>

        <div className="row">
          <div className="col-lg-6  insuitPic"></div>
          <div className="col-lg-6 text-white insuitDef">
            {" "}
            <h2>
              <span className="text-heading">IN-SUITE</span>
            </h2>
            <ul>
              <li>
                <b>
                  <u> In-Suite Water Filters:</u>
                </b>
                Rocean water filtration systems are present in all suites, which
                eliminates single-use plastic water bottles.
                <br />
                <br />
              </li>
              <li>
                <b>
                  <u>Smart Lights:</u>
                </b>{" "}
                Lights turn off after 15 minutes of inactivity in the room,
                reducing wasted electricity.
                <br />
                <br />
              </li>
              <li>
                <b>
                  <u>Full-Sized Amenities:</u>
                </b>{" "}
                The hotel uses full-sized Byredo amenities to reduce waste from
                travel-sized soap bottles.
                <br />
                <br />
              </li>
              <li>
                <b>
                  <u>Energy Saving:</u>
                </b>{" "}
                In-suite temperatures fluctuate +/- 4 degrees when motion is not
                detected to save energy.
                <br />
                <br />
              </li>
              <li>
                <b>
                  <u>Reducing Waste:</u>
                </b>{" "}
                Bulk amenities are used in all suites to reduce plastic waste.
                <br />
                <br />
              </li>
              <li>
                <b>
                  <u>Recycling:</u>
                </b>{" "}
                Nespresso Pods are recycled.
                <br />
                <br />
              </li>
              <li>
                <b>
                  <u>Reducing Water Usage:</u>
                </b>{" "}
                Toilets have dual flush capabilities, which allow for the
                appropriate amount of water when flushing. Showerheads in each
                guest suite also monitor water usage, ensuring reduced water
                waste.
              </li>
            </ul>
          </div>

          <div className="col-lg-6  foodPic"></div>
          <div className="col-lg-6 text-white foodDef">
            {" "}
            <h2>
              <span className="text-heading">FOOD & BEVERAGE</span>
            </h2>
            <ul>
              <li>
                <b>
                  <u>Donated Food:</u>
                </b>
                6,000+ meals have been donated as part of the New York City
                Rethink Food Program.
              </li>
              <li>
                <b>
                  <u>Composting:</u>
                </b>{" "}
                Restaurant takeout containers are compostable.
              </li>
              <li>
                <b>
                  <u>Full-Sized Amenities:</u>
                </b>{" "}
                The hotel uses full-sized Byredo amenities to reduce waste from
                travel-sized soap bottles.
              </li>
              <li>
                <b>
                  <u>Reusable Water Bottles:</u>
                </b>{" "}
                Two water fountains with reusable bottle dispensers can be found
                within the hotel.
              </li>
            </ul>
          </div>

          <div className="col-lg-6  lightPic"></div>
          <div className="col-lg-6 text-white lightDef">
            {" "}
            <h2>
              <span className="text-heading">SMART LIGHT</span>
            </h2>
            <ul>
              <li>
                Motion-sensor lights are available in public spaces to save
                electricity. LED lights are also featured throughout the hotel,
                which use 75% less power than regular bulbs.
                <br />
              </li>
              <li>
                {" "}
                Motion-sensor Doors helps you Go with the Flow. Minimizes the
                effort and makes you feel easy and comfortable. you can go
                anywhere wihtout Touching anything
              </li>
              <li>
                {" "}
                Air Conditioners are available in both public places and all
                types of Rooms which are top-className rated. No matter what you
                pay You can get most Outcome of it.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Amenities;
