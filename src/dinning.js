import React from "react";
import { Link } from "react-router-dom";
import Logo from "./img/logo3.png";
import "./dinning.css";

import din1 from "./img/din1.jpg";
import din2 from "./img/din2.jpg";
import din3 from "./img/din3.jpg";

function dinning() {
  return (
    <div>
      <div className="container-fluid banner op-navd" id="home">
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

      <div class="col-md-8 offset-md-2 dinnigHeader">
        <hr />
        {/* <hr /> */}
        <h1>
          <p class="text-heading animeL">DINNING FOOD</p>
          <p className="animeR"> Include </p>
        </h1>
        <ul class="m-4">
          <li>
            <h3>Chinese Food</h3>
          </li>
          <li>
            <h3>Italian Food</h3>
          </li>
          <li>
            <h3>Fast Food</h3>
          </li>
          <li>
            <h3>Continental Food</h3>
          </li>
          <li>
            <h3>Drinks Bar</h3>
          </li>
        </ul>
      </div>

      <div class="slideshow">
        <figure>
          <img src={din1} alt="slide 1"></img>
          <img src={din2} alt="Slide 2"></img>
          <img src={din3} alt="Slide 3"></img>
          <figcaption>
            Enjoy the world's famous and delicious food in our hotel with a
            large variety of heart touching tastes and aroma!!!
          </figcaption>
        </figure>
      </div>

      <div class="row DinnigDefine">
        <div class="col-lg-6  ChineseFood"></div>
        <div class="col-lg-6  ChineseFoodD">
          <h2>
            <span class="text-heading">CHINESE</span> FOOD
          </h2>
          <p>
            Enjoy the delicious chinese food recipes cooked by world class chefs
            who are expert in cooking recipes like Kung Pao Chicken, Sweet and
            Sour Pork, Peking Roast Duck, Mapo Tofu, Chow Mein, Chinese Hot Pot,
            Spring Rolls, Wonton Soup.
          </p>
        </div>
        <div class="col-lg-6  ContinentalFood"></div>
        <div class="col-lg-6  ContinentalFoodD">
          <h2>
            <span class="text-heading">CONTINENTAL</span> FOOD
          </h2>
          <p>
            Continental dishes menu includes French, Thai, and Mediterranean
            dishes. It is frequently cooked in olive oil and served with
            different sauces recipes like Prawn Pie ,Crispy Calamari Rings,
            Stuffed Jacket Potatoes, Roast Lamb Salad,Sticky Toffee
            Pudding,Broccoli Baked Roasted.
          </p>
        </div>

        <div class="col-lg-6  FastFood"></div>
        <div class="col-lg-6  FastFoodD">
          <h2>
            <span class="text-heading">FAST</span> FOOD
          </h2>
          <p>
            Order the world's best fast food items that will make your mouth
            swim to eat delectable delicacy rmenu consist of Hamburger,
            Cheeseburger, Sandwich, Milkshake, Muffin, pizza, and Hot dog
          </p>
        </div>
        <div class="col-lg-6  ItalianFood"></div>
        <div class="col-lg-6  ItalianFoodD">
          <h2>
            <span class="text-heading">ITALIAN</span> FOOD
          </h2>
          <p>
            Kicking things off with the big name of Italian cuisine, forget
            anything you once thought about pizza: here in Italy, pizza making
            is a form of art moreover we also have Pasta, Risotto, Polenta,
            cured meats, Pizza Margherita, Seafood, Coffee and famous tipples.
          </p>
        </div>
      </div>
      <h1 class="text-center">
        <span class="text-heading">
          <b>Dinning & DRINKS</b>
        </span>
      </h1>
      <div class="row extraa">
        <div class="col-lg-6 Drinkbar"></div>
        <div class="col-lg-6 DrinkbarD">
          <h2>
            <span class="text-heading">
              <b>LUXURY DRINKS</b>
            </span>
            &{" "}
            <span class="text-heading">
              <b>INNER RESTAURANT</b>
            </span>
          </h2>
          <p>
            Enjoy some casual drinks like cold drink, juices, MaximFesenko,
            Cosmopolitan,Vesper as well as unique and antique Vodka, (1951)
            Whiskey, Brandy, Vermouth, Cognac, Beer, Port wine, Rum, Gin, Cider.
            <br />
            <br />
            <b>In RESTAURANTs</b> We Have unique flavors and beautifully
            presented plates. Our signature dishes are created with the freshest
            ingredients for an unforgettable experience.
          </p>
        </div>
        <div class="col-lg-6 roof"></div>
        <div class="col-lg-6 roofD">
          <h2>
            <span class="text-heading">
              <b>LOOPY DOOPY ROOFTOP BAR</b>
            </span>
          </h2>
          <p>
            Soak in panoramic views of New York Harbor, the Hudson River, and
            the Statue of Liberty. Stay for handcrafted cocktails and stunning
            sunsets.
            <br />
            <br />
            <b>Loopy Doopy Rooftop Bar</b> will close for the WINTER SEASON
            every Year. You can Enjoy Snowfall Outside ..
            <b>THANKS</b>
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default dinning;
