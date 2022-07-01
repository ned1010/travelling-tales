import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./card.css";
import { cardImages } from "./Image";

export default function Card() {
  return (
    <div className="card">
      <div className="card-container container">
        <div className="card-info">
          <h3>Get the Best out of Your Trip</h3>
          <p>
          At Travelling Tales offer a perfect blend of adventurous, thrilling, and cultural experiences in one of the most beautiful travel destinations in the Himalaya. A terrain that has mountains, forests, deserts, lakes, rivers, waterfalls in one beautiful and dynamic geography surrounded with snow-capped mountains and connected by high motorable passes, Ladakh is your go to destination.
          </p>

          <div className="card-btns">
            <Link to="#contact">
              <button className="btn">Contact Us</button>
            </Link>
          </div>
        </div>

        <div className="card-img">
          <div className="card-overlay">
            <img
              className="img small-img"
              src={require("../../assets/images/card1.jpg")}
              alt="card-ladakh"
            />
          </div>
          <div className="card-overlay">
            <img
              className="img large-img"
              src={require("../../assets/images/card2.jpg")}
              alt="card1"
            />
          </div>
        </div>
      </div>

      <div className="slider-section">
        <h2>Find the Best Spot for Your Holiday</h2>
        <div className="slide-container">
          {cardImages.map((image, index) => {
            return (
              <div key={index} className="slider">
              <img
                className={image.className}
                src={require("../../assets/images/best" +
                  image.number +
                  ".jpg")}
                alt={image.alt}
              />
                <div className="slider-info">
                  <h3 className="slider-title">{image.title}</h3>
                  <span className="slider-description">
                    {image.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
