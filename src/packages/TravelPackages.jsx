import React from "react";
import PackageCard from "../packages/PackageCard";
import "./TravelPackages.css";
import eiffelImg from "../assets/eiffel_img.jpg";
import riverImg from "../assets/river_img.jpg";
import louvreImg from "../assets/Louvre_img.jpg";

const travelPackages = [
    {
        id: 1,
        image: eiffelImg,
        title: "Paris Getaway",
        description: "Explore the Eiffel Tower, Louvre Museum, and the charming streets of Paris.",
        price: "$1,200",
      },
      {
        id: 2,
        image: riverImg,
        title: "French Riviera Escape",
        description: "Relax on the sunny beaches of Nice and explore Monaco.",
        price: "$1,800",
      },
      {
        id: 3,
        image: louvreImg,
        title: "Loire Valley Castles",
        description: "Visit stunning castles and vineyards in the Loire Valley.",
        price: "$1,500",
      },
    ];


function TravelPackages() {
  return (
    <div className="travel-packages-container">
      <h1>Discover France</h1>
      <div className="packages-grid">
        {travelPackages.map((packageItem) => (
          <PackageCard
            key={packageItem.id}
            image={packageItem.image}
            title={packageItem.title}
            description={packageItem.description}
            price={packageItem.price}
          />
        ))}
      </div>
    </div>
  );
}

export default TravelPackages;
