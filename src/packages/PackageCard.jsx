import React from "react";
import "./PackageCard.css";

function PackageCard({ image, title, description, price }) {
  return (
    <div className="package-card">
      <img src={image} alt={title} className="package-image" />
      <div className="package-content">
        <h3 className="package-title">{title}</h3>
        <p className="package-description">{description}</p>
        <p className="package-price">Starts at {price}</p>
        <button className="book-now-btn">Book Now</button>
      </div>
    </div>
  );
}

export default PackageCard;
