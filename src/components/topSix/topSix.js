import React from "react";
import "./topSix.css";
import { topImages } from "./images";

function TopSix() {
  return (
    <div className="top-six">
      <h3>Top 6 Most Popular Destinations</h3>
      <div className="top-container">
        {topImages.map((item, index) => {
          return (
            <div key={index}>
              <img
                className="top-img"
                src={require("../../assets/images/top" +
                  item.number +
                  ".jpg")}
                alt={item.alt}
              />
              <div className="slider-info">
                <h3 className="slider-title">{item.title}</h3>
                <span className="slider-description">
                  {item.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopSix;
