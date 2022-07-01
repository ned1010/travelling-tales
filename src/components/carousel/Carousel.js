import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./carousel.css";

export default function Carousel() {
  return (
    <div className="carousel-container">
      <div className="info-container">
        <h3>Welcome to Ladakh</h3>
        <p>Explore the wonders of Himalayas</p>
      </div>
      <div className="carousel-btns">
        <Link to="#destinations">
          <button className="btn">Explore</button>
        </Link>
      </div>
    </div>
  );
}
