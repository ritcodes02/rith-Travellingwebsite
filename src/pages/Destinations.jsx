import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import destination_video from '../assets/destination_video.mp4'
import eiffelImg from '../assets/eiffel_img.jpg'
import louvreImg from '../assets/Louvre_img.jpg';
import montSaintMichelImg from '../assets/mont saint-michel.jpg';
import palaceImg from '../assets/palace.jpg';
import chateauImg from '../assets/chateau_img.jpg';
import notreImg from '../assets/notre_img.jpg';
import lavenderImg from '../assets/lavender.jpg';
import riverImg from '../assets/river_img.jpg';
import disneylandImg from '../assets/disneyland.jpg';
import mountImg from '../assets/mont_img.jpg';

import Footer from "../components/Footer";


function Destinations () {

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const touristPlaces = [
    
      { name: "Eiffel Tower", category: "Monuments", image: eiffelImg },
      { name: "Louvre Museum", category: "Monuments", image: louvreImg },
      { name: "Mont Saint-Michel", category: "Natural Wonders", image: montSaintMichelImg },
      { name: "Palace of Versailles", category: "Monuments", image: palaceImg },
      { name: "Château de Chambord", category: "Monuments", image: chateauImg },
      { name: "Notre Dame Cathedral", category: "Monuments", image: notreImg },
      { name: "Provence Lavender Fields", category: "Natural Wonders", image: lavenderImg },
      { name: "French Riviera", category: "Natural Wonders", image: riverImg },
      { name: "Disneyland Paris", category: "Theme Parks", image: disneylandImg },
      { name: "Chamonix-Mont-Blanc", category: "Natural Wonders", image: mountImg },
    
    
  ];

 

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredPlaces = touristPlaces.filter(
    (place) =>
      place.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "All" || place.category === selectedCategory)
  );

  return (
    <>
       <div className="destination">
      <video src={destination_video} autoPlay loop muted/>
      <h1>France Tourist Places</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search places..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <div className="filters">
        <label>
          <input
            type="radio"
            name="category"
            value="All"
            checked={selectedCategory === "All"}
            onChange={handleCategoryChange}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="Monuments"
            checked={selectedCategory === "Monuments"}
            onChange={handleCategoryChange}
          />
          Monuments
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="Natural Wonders"
            checked={selectedCategory === "Natural Wonders"}
            onChange={handleCategoryChange}
          />
          Natural Wonders
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="Theme Parks"
            checked={selectedCategory === "Theme Parks"}
            onChange={handleCategoryChange}
          />
          Theme Parks
        </label>
      </div>

      <ul className="place-list">
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map((place, index) => (
            <li key={index} className="place-item">
              <FaMapMarkerAlt className="place-icon" />
              <img src={place.image} alt={place.name} className="place-image" />
              {place.name}
            </li>
          ))
        ) : (
          <p className="no-results">No matching places found</p>
        )}
      </ul>
      
    </div>
    
    </>
  );
};

export default Destinations;
