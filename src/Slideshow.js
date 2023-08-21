import React from "react";
import { Link } from "react-router-dom";

import "./Slideshow.css";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";

function Slideshow() {
  return (
    <div>
      <div className="offset-md-0.7 suiteHeader mt-5">
        <hr className="animeR text-white" />
        {/* <hr /> */}
        <h1>
          <span className="text-heading">Suites</span> Include
        </h1>

        <div className="row offset-md-3">
          <div className="col-sm-6">
            <h3>
              <span className="text-heading">Standard Single</span> Suite
            </h3>
            <h3>
              <span className="text-heading">Double Rooms</span> Suite
            </h3>
          </div>
          <div className="col-sm-6">
            <h3>
              <span className="text-heading">Family Edition</span> Suite
            </h3>
            <h3>
              <span className="text-heading">Luxury Special</span> Suite
            </h3>
          </div>
        </div>
      </div>

      <div className="slideshow">
        <figure>
          <img src={img1} alt="slide 1"></img>
          <img src={img2} alt="Slide 2"></img>
          <img src={img3} alt="Slide 3"></img>
          <figcaption>
            Enjoy in-suite Amenities including a Water filtration system, Cofee
            machine and more. !
          </figcaption>
        </figure>
      </div>
      <div className="container slideContainer">
        <div className="row suiteDefine">
          <div className="col-md-6 order-md-1 familyDef">
            <h2>
              <span className="text-heading">FAMILY</span> SUITE
            </h2>
            <p>
              Bring the Family to Transalvania Romania Downtown for a Family
              Suite Escape. Book one room for you and get the second “kids” room
              for a good Discount. Sip on complimentary Coffee while the kids
              enjoy milk and cookies for Free.
            </p>
            <Link
              className="btn btn-md text-center animate__animated animate__tada buynow"
              to="/login"
            >
              BOOK NOW
            </Link>
          </div>
          <div className="col-md-6 order-md-1.5 familySuit"></div>

          <div className="col-md-6 order-md-2 doubleDef">
            {" "}
            <h2>
              <span className="text-heading">DOUBLE</span> SUITE
            </h2>
            <p>
              Our Double executive suites provide over 700sq-ft. of stylish
              amenities. Enjoy 2 seperate double beds or Four seperate
              Sleep-overs with 2 Extrta foldable sleep-overs. Whcih can make
              your Life with more Ease and comfortable
            </p>
            <Link
              className="btn btn-md text-center animate__animated animate__tada buynow"
              to="/login"
            >
              BOOK NOW
            </Link>
          </div>
          <div className="col-md-6 order-md-2 doubleSuit"></div>
          <div className="col-md-6 order-md-4 standardDef">
            {" "}
            <h2>
              <span className="text-heading">STANDARD</span> SUITE
            </h2>
            <p>
              Suites with the Option of one King or two Double Beds, Our
              Standard suite also features modern decor', some Great Artworks
              and a range of up-scale facilities.
            </p>
            <Link
              className="btn btn-md text-center animate__animated animate__tada buynow"
              to="/login"
            >
              BOOK NOW
            </Link>
          </div>
          <div className="col-md-6 order-md-3 standardSuit"></div>

          <div className="col-md-6 order-md-4 luxuryDef">
            <h2>
              <span className="text-heading">LUXURY</span> SUITE
            </h2>
            <p>
              Experience separate sleeping and living areas with stylish
              interiors and dividing, sliding doors. From views of the River to
              our in-room water filtration systems, our suites offer
              sustainable, residence-style comforts.
            </p>
            <Link
              className="btn btn-md text-center animate__animated animate__tada buynow"
              to="/login"
            >
              BOOK NOW
            </Link>
          </div>
          <div className="col-md-6 order-md-4 luxurySuit"></div>
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
